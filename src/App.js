import React from 'react';
import Flashcard from './components/Flashcards';
import flashcards from './data/flashcards.json'; // adjust path if inside /data

function App() {
  return (
    <div className="App">
      <h1>Study Flashcards</h1>
      {flashcards.map((card, index) => (
        <Flashcard key={index} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
}

export default App;
