import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FlashcardsPage from './pages/FlashcardsPage';
import QuizzesPage from './pages/QuizzesPage';
import Flashcard from './components/Flashcards';

function App() {
  return (
    <Router>
      <div className="App">
        <nav
          style={{
            display: 'flex',
            gap: '20px',
            padding: '10px',
            borderBottom: '1px solid #ccc',
          }}
        >
          <Link to="/">Flashcards</Link>
          <Link to="/quizzes">Quizzes</Link>
        </nav>

        <Routes>
          <Route path="/" element={<FlashcardsPage />} />
          <Route path="/quizzes" element={<QuizzesPage />} />
        </Routes>
      </div>
      <Flashcard
        question={'What is the 9-1-1 call answer process?'}
        answer={'Orange county 911'}
      />
    </Router>
  );
}

export default App;
