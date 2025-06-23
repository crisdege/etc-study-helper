// import React, { useState, useEffect } from 'react';
// import Flashcard from '../components/Flashcards';
// import flashcardsData from '../data/protocols.json';

// function shuffleArray(array) {
//   const shuffled = [...array];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// }

// function ProtocolsPage() {
//   const [selectedCategory, setSelectedCategory] = useState('ALL');
//   const [shuffledCards, setShuffledCards] = useState([]);

//   const categories = ['ALL', 'EMD', 'EFD', 'EPD'];

//   useEffect(() => {
//     const filtered =
//       selectedCategory === 'ALL'
//         ? flashcardsData
//         : flashcardsData.filter((card) => card.category === selectedCategory);

//     setShuffledCards(shuffleArray(filtered));
//   }, [selectedCategory]);

//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>Protocols</h1>

//       {/* Category Buttons */}
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           flexWrap: 'wrap',
//           gap: '10px',
//           marginBottom: '30px',
//         }}
//       >
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             style={{
//               padding: '10px 20px',
//               backgroundColor: selectedCategory === cat ? '#007bff' : '#f0f0f0',
//               color: selectedCategory === cat ? '#fff' : '#333',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               fontWeight: 'bold',
//             }}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* {shuffledCards.map((card, index) => (
//         <Flashcard key={index} question={card.question} answer={card.answer} />
//       ))} */}
//       <div
//         style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
//       >
//         {shuffledCards.map((card, index) => (
//           <Flashcard
//             key={index}
//             question={card.question}
//             answer={card.answer}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProtocolsPage;

import React, { useState, useEffect } from 'react';
import flashcardsData from '../data/protocols.json';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function ProtocolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [shuffledCards, setShuffledCards] = useState([]);

  const categories = ['ALL', 'EMD', 'EFD', 'EPD'];

  useEffect(() => {
    const filtered =
      selectedCategory === 'ALL'
        ? flashcardsData
        : flashcardsData.filter((card) => card.category === selectedCategory);

    // setShuffledCards(shuffleArray(filtered));
    setShuffledCards(filtered);
  }, [selectedCategory]);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Protocol Rules</h1>

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

      {/* Notion-Style Rows */}
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          border: '1px solid #eee',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            backgroundColor: '#f9f9f9',
            fontWeight: 'bold',
            padding: '12px 16px',
            borderBottom: '1px solid #ddd',
          }}
        >
          <div style={{ flex: 1 }}>Category</div>
          <div style={{ flex: 3 }}>Protocol</div>
          <div style={{ flex: 3 }}>Rule</div>
        </div>
        {shuffledCards.map((card, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              padding: '12px 16px',
              borderBottom: '1px solid #eee',
              backgroundColor: index % 2 === 0 ? '#fff' : '#f7f7f7',
              transition: 'background-color 0.2s',
            }}
          >
            <div style={{ flex: 1 }}>{card.category}</div>
            <div style={{ flex: 3 }}>{card.question}</div>
            <div style={{ flex: 3 }}>{card.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProtocolsPage;
