import React, { useState } from 'react';

function QuizQuestion({ questionData, onAnswer }) {
  const [selected, setSelected] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isMultipleChoice =
    questionData.choices && questionData.choices.length > 0;

  const handleSubmit = () => {
    if (!selected.trim()) return;

    setIsSubmitted(true);

    const correct = isMultipleChoice
      ? selected === questionData.answer
      : selected.trim().toLowerCase() ===
        questionData.answer.trim().toLowerCase();

    onAnswer(correct);
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        marginBottom: '20px',
      }}
    >
      <h3>{questionData.question}</h3>

      {isMultipleChoice ? (
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {questionData.choices.map((choice, i) => (
            <li key={i}>
              <label>
                <input
                  type="radio"
                  name={`question-${questionData.question}`}
                  value={choice}
                  checked={selected === choice}
                  onChange={() => setSelected(choice)}
                  disabled={isSubmitted}
                />{' '}
                {choice}
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <input
          type="text"
          placeholder="Type your answer"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          disabled={isSubmitted}
          style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
        />
      )}

      {!isSubmitted && (
        <button onClick={handleSubmit} disabled={!selected.trim()}>
          Submit
        </button>
      )}

      {isSubmitted && (
        <p
          style={{
            color:
              selected.trim().toLowerCase() ===
              questionData.answer.trim().toLowerCase()
                ? 'green'
                : 'red',
          }}
        >
          {selected.trim().toLowerCase() ===
          questionData.answer.trim().toLowerCase()
            ? 'Correct!'
            : `Incorrect. Correct answer: ${questionData.answer}`}
        </p>
      )}
    </div>
  );
}

export default QuizQuestion;
