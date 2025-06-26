import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import FlashcardsPage from './pages/FlashcardsPage';
import QuizzesPage from './pages/QuizzesPage';
import ScenariosPage from './pages/ScenariosPage';
import ProtocolsPage from './pages/ProtocolsPage';
import LandingPage from './pages/LandingPage';
import NatureCodesPage from './pages/NatureCodesPage';
import RadioLandingPage from './pages/RadioPage';
import LandingNavBar from './pages/LandingNavBar';
import NatureCodesNavBar from './pages/NatureCodesNavBar';
import CallsProcessPage from './pages/CallsProcessPage';

// Main App with navigation and routes
function App() {
  return (
    <Router>
      <div className="App">
        <LandingNavBar />
        {/* <nav style={styles.nav}>
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
        </nav> */}

        <Routes>
          <Route path="/nature" element={<NatureCodesNavBar />}>
            <Route index element={<Navigate to="calls" replace />} />
            <Route path="calls" element={<CallsProcessPage />} />
            <Route path="flashcards" element={<FlashcardsPage />} />
            <Route path="quizzes" element={<QuizzesPage />} />
            <Route path="scenarios" element={<ScenariosPage />} />
            <Route path="protocols" element={<ProtocolsPage />} />
          </Route>
          {/* <Route path="/nature" element={<NatureCodesNavBar />} /> */}
          <Route path="/etc-study-helper" element={<LandingPage />} />
          {/* <Route path="nature/flashcards" element={<FlashcardsPage />} /> */}
          {/* <Route path="nature/quizzes" element={<QuizzesPage />} /> */}
          {/* <Route path="nature/scenarios" element={<ScenariosPage />} /> */}
          {/* <Route path="nature/protocols" element={<ProtocolsPage />} /> */}
          <Route path="/nature-codes" element={<NatureCodesPage />} />
          <Route path="/radio" element={<RadioLandingPage />} />
          {/* <Route path="/nature/:section" element={<NatureCodesPage />} />
          <Route
            path="/nature"
            element={<Navigate to="/nature/remember" replace />}
          /> */}
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
