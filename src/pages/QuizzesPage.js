import React, { useState, useEffect } from 'react';
import quizData from '../data/quizzes.json';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function QuizzesPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const categories = ['ALL', 'EMD', 'EFD', 'EPD'];

  useEffect(() => {
    const filtered =
      selectedCategory === 'ALL'
        ? quizData
        : quizData.filter((q) => q.category === selectedCategory);

    setQuestions(shuffleArray(filtered));
    setUserAnswers({});
    setIsSubmitted(false);
    setScore(0);
  }, [selectedCategory]);

  const handleChange = (index, value) => {
    setUserAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, i) => {
      const correct = q.answer.trim().toLowerCase();
      const user = (userAnswers[i] || '').trim().toLowerCase();
      if (user === correct) newScore++;
    });
    setScore(newScore);
    setIsSubmitted(true);
  };

  const handleRetake = () => {
    const filtered =
      selectedCategory === 'ALL'
        ? quizData
        : quizData.filter((q) => q.category === selectedCategory);

    setQuestions(shuffleArray(filtered));
    setUserAnswers({});
    setIsSubmitted(false);
    setScore(0);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>📋 Quiz</h1>

      {/* Category Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '30px',
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '10px 20px',
              backgroundColor: selectedCategory === cat ? '#007bff' : '#f0f0f0',
              color: selectedCategory === cat ? '#fff' : '#333',
              border: '1px solid #ccc',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {!isSubmitted && (
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#555' }}>
          Answer all questions, then submit.
        </p>
      )}

      {/* Quiz Questions */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '30px',
        }}
      >
        {questions.map((q, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
              padding: '20px',
              marginBottom: '20px',
              backgroundColor: '#fff',
            }}
          >
            <h3 style={{ marginBottom: '15px' }}>{q.question}</h3>

            {q.choices ? (
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {q.choices.map((choice, i) => (
                  <li key={i} style={{ marginBottom: '10px' }}>
                    <label style={{ cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={choice}
                        disabled={isSubmitted}
                        checked={userAnswers[index] === choice}
                        onChange={() => handleChange(index, choice)}
                        style={{ marginRight: '8px' }}
                      />
                      {choice}
                    </label>
                  </li>
                ))}
              </ul>
            ) : (
              <input
                type="text"
                placeholder="Type your answer..."
                value={userAnswers[index] || ''}
                onChange={(e) => handleChange(index, e.target.value)}
                disabled={isSubmitted}
                style={{
                  padding: '10px',
                  width: '100%',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              />
            )}

            {/* Feedback */}
            {isSubmitted && (
              <p
                style={{
                  marginTop: '10px',
                  color:
                    (userAnswers[index] || '').trim().toLowerCase() ===
                    q.answer.trim().toLowerCase()
                      ? 'green'
                      : 'red',
                }}
              >
                {(userAnswers[index] || '').trim().toLowerCase() ===
                q.answer.trim().toLowerCase()
                  ? '✅ Correct'
                  : `❌ Incorrect. Correct answer: ${q.answer}`}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Submit or Summary */}
      {!isSubmitted ? (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button
            onClick={handleSubmit}
            style={{
              padding: '12px 30px',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            ✅ Submit Quiz
          </button>
        </div>
      ) : (
        <div
          style={{
            marginTop: '40px',
            paddingTop: '20px',
            borderTop: '2px solid #eee',
          }}
        >
          <h2 style={{ textAlign: 'center' }}>🎉 Quiz Complete!</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
            You scored <strong>{score}</strong> out of{' '}
            <strong>{questions.length}</strong>.
          </p>

          <h3 style={{ marginTop: '30px' }}>📘 Summary:</h3>
          <ul style={{ paddingLeft: '20px' }}>
            {questions.map((q, i) => (
              <li key={i} style={{ marginBottom: '20px' }}>
                <p>
                  <strong>Q:</strong> {q.question}
                </p>
                <p>
                  <strong>Your Answer:</strong>{' '}
                  {userAnswers[i] || '[No answer]'}
                </p>
                <p>
                  <strong>Correct Answer:</strong> {q.answer}
                </p>
              </li>
            ))}
          </ul>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button
              onClick={handleRetake}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              🔁 Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizzesPage;
