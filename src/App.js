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
import rememberData from './data/remember.json';
import Flashcard from './components/Flashcards';
import ProtocolsPage from './pages/ProtocolsPage';

// Styled HomePage with flashcard
function HomePage() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Might want to remember</h1>

      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {rememberData.map((card, index) => (
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

// Main App with navigation and routes
function App() {
  return (
    <Router>
      <div className="App">
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>
            Remember
          </Link>
          |
          <Link to="/flashcards" style={styles.navLink}>
            Nature Codes
          </Link>
          |
          <Link to="/quizzes" style={styles.navLink}>
            Quizzes
          </Link>
          |
          <Link to="/scenarios" style={styles.navLink}>
            Scenarios
          </Link>
          |
          <Link to="/protocols" style={styles.navLink}>
            Protocol Rules
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flashcards" element={<FlashcardsPage />} />
          <Route path="/quizzes" element={<QuizzesPage />} />
          <Route path="/scenarios" element={<ScenariosPage />} />
          <Route path="/protocols" element={<ProtocolsPage />} />
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
    backgroundColor: '#f9f9f9',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    marginTop: '20px',
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
