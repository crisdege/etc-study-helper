import React, { useState } from 'react';

function Flashcard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      onClick={() => setShowAnswer(!showAnswer)}
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        margin: '10px',
        cursor: 'pointer',
      }}
    >
      <h3>{showAnswer ? answer : question}</h3>
    </div>
  );
}

export default Flashcard;
