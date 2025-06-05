import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FlashcardsPage from './pages/FlashcardsPage';
import QuizzesPage from './pages/QuizzesPage';

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
    </Router>
  );
}

export default App;
