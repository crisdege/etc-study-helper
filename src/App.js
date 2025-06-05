// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import FlashcardsPage from './pages/FlashcardsPage';
// import QuizzesPage from './pages/QuizzesPage';
// import ScenariosPage from './pages/ScenariosPage';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav
//           style={{
//             display: 'flex',
//             gap: '20px',
//             padding: '10px',
//             borderBottom: '1px solid #ccc',
//           }}
//         >
//           <Link to="/">Flashcards</Link>
//           <Link to="/quizzes">Quizzes</Link>
//           <Link to="/scenarios">Scenarios</Link>
//         </nav>

//         <Routes>
//           <Route path="/" element={<FlashcardsPage />} />
//           <Route path="/quizzes" element={<QuizzesPage />} />
//           <Route path="/scenarios" element={<ScenariosPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FlashcardsPage from './pages/FlashcardsPage';
import QuizzesPage from './pages/QuizzesPage';
import ScenariosPage from './pages/ScenariosPage';

// Styled HomePage with flashcard
function HomePage() {
  const [showAnswer, setShowAnswer] = React.useState(false);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Flashcard</h2>
      <div style={styles.card}>
        <p style={styles.question}>
          <strong>Q:</strong> What is the 911 call process?
        </p>
        {showAnswer ? (
          <p style={styles.answer}>
            <strong>A:</strong> Orange County 911, what is the address of your
            emergency?
          </p>
        ) : (
          <button style={styles.button} onClick={() => setShowAnswer(true)}>
            Show Answer
          </button>
        )}
      </div>
    </div>
  );
}

// Main App with navigation and routes
function App() {
  return (
    <Router>
      <div className="App">
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
          <Link to="/flashcards" style={styles.navLink}>
            Flashcards
          </Link>
          <Link to="/quizzes" style={styles.navLink}>
            Quizzes
          </Link>
          <Link to="/scenarios" style={styles.navLink}>
            Scenarios
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flashcards" element={<FlashcardsPage />} />
          <Route path="/quizzes" element={<QuizzesPage />} />
          <Route path="/scenarios" element={<ScenariosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Styles object
const styles = {
  nav: {
    display: 'flex',
    gap: '20px',
    padding: '15px 30px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #ccc',
    justifyContent: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '40px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '25px',
    width: '340px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  question: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  answer: {
    fontSize: '18px',
    color: '#28a745',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default App;
