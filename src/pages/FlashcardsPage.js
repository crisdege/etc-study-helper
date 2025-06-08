import React, { useState, useEffect } from 'react';
import Flashcard from '../components/Flashcards';
import flashcardsData from '../data/flashcards.json';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function FlashcardsPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [shuffledCards, setShuffledCards] = useState([]);

  const categories = ['ALL', 'EMD', 'EFD', 'EPD'];

  useEffect(() => {
    const filtered =
      selectedCategory === 'ALL'
        ? flashcardsData
        : flashcardsData.filter((card) => card.category === selectedCategory);

    setShuffledCards(shuffleArray(filtered));
  }, [selectedCategory]);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Nature Codes Flashcards</h1>

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

      {/* {shuffledCards.map((card, index) => (
        <Flashcard key={index} question={card.question} answer={card.answer} />
      ))} */}
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {shuffledCards.map((card, index) => (
          <Flashcard
            key={index}
            question={card.question}
            answer={card.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default FlashcardsPage;
