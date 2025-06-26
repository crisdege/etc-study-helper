// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Box, Typography, Tabs, Tab } from '@mui/material';

// const styles = {
//   nav: {
//     marginBottom: 16,
//     display: 'flex',
//     justifyContent: 'center',
//     gap: 12,
//     fontSize: '1rem',
//   },
//   navLink: {
//     textDecoration: 'none',
//     color: '#1976d2',
//     fontWeight: '500',
//   },
// };

// const NatureCodesPage = () => {
//   // Track which tab/section is active
//   const [activeSection, setActiveSection] = useState('remember');

//   const handleChange = (event, newValue) => {
//     setActiveSection(newValue);
//   };

//   return (
//     <Box sx={{ maxWidth: 800, margin: 'auto', mt: 4, px: 2 }}>
//       {/* Navigation */}
//       <nav style={styles.nav}>
//         <Link to="/" style={styles.navLink}>
//           Remember
//         </Link>
//         |
//         <Link to="/flashcards" style={styles.navLink}>
//           Nature Codes
//         </Link>
//         |
//         <Link to="/quizzes" style={styles.navLink}>
//           Quizzes
//         </Link>
//         |
//         <Link to="/scenarios" style={styles.navLink}>
//           Scenarios
//         </Link>
//         |
//         <Link to="/protocols" style={styles.navLink}>
//           Protocol Rules
//         </Link>
//       </nav>

//       {/* Section selector with MUI Tabs (optional for switching content inside this page) */}
//       <Tabs
//         value={activeSection}
//         onChange={handleChange}
//         centered
//         sx={{ mb: 3 }}
//       >
//         <Tab label="Remember" value="remember" />
//         <Tab label="Flashcards" value="flashcards" />
//         <Tab label="Quizzes" value="quizzes" />
//         <Tab label="Scenarios" value="scenarios" />
//         <Tab label="Protocols" value="protocols" />
//       </Tabs>

//       {/* Content area */}
//       <Box
//         sx={{ border: '1px solid #ddd', p: 3, borderRadius: 2, minHeight: 200 }}
//       >
//         {activeSection === 'remember' && (
//           <Typography variant="body1">
//             {/* Your Remember section content here */}
//             Welcome to the Remember section of Nature Codes!
//           </Typography>
//         )}
//         {activeSection === 'flashcards' && (
//           <Typography variant="body1">Flashcards content here.</Typography>
//         )}
//         {activeSection === 'quizzes' && (
//           <Typography variant="body1">Quizzes content here.</Typography>
//         )}
//         {activeSection === 'scenarios' && (
//           <Typography variant="body1">Scenarios content here.</Typography>
//         )}
//         {activeSection === 'protocols' && (
//           <Typography variant="body1">Protocol Rules content here.</Typography>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default NatureCodesPage;
import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Tabs, Tab } from '@mui/material';

const SECTIONS = ['calls', 'flashcards', 'quizzes', 'scenarios', 'protocols'];

const styles = {
  nav: {
    marginBottom: 16,
    display: 'flex',
    justifyContent: 'center',
    gap: 12,
    fontSize: '1rem',
  },
  navLink: {
    textDecoration: 'none',
    color: '#1976d2',
    fontWeight: '500',
    cursor: 'pointer',
  },
};

const NatureCodesPage = () => {
  const { section } = useParams(); // get the current section from the URL
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    navigate(`/nature/${newValue}`); // update the URL
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', mt: 4, px: 2 }}>
      {/* Navigation */}
      {/* <nav style={styles.nav}>
        {SECTIONS.map((s, i) => (
          <span
            key={s}
            style={styles.navLink}
            onClick={() => navigate(`/nature/${s}`)}
          >
            {s === 'flashcards'
              ? 'Nature Codes'
              : s.charAt(0).toUpperCase() + s.slice(1)}
          </span>
        ))}
      </nav> */}

      {/* MUI Tabs synced with URL */}
      <Tabs value={section} onChange={handleTabChange} centered sx={{ mb: 3 }}>
        <Tab label="Call Process" value="calls" />
        <Tab label="Flashcards" value="flashcards" />
        <Tab label="Quizzes" value="quizzes" />
        <Tab label="Scenarios" value="scenarios" />
        <Tab label="Protocols" value="protocols" />
      </Tabs>

      {/* Section content */}
      <Box
        sx={{ border: '1px solid #ddd', p: 3, borderRadius: 2, minHeight: 200 }}
      >
        {section === 'calls' && (
          <Typography>Welcome to the calls section!</Typography>
        )}
        {section === 'flashcards' && (
          <Typography>Flashcards content goes here.</Typography>
        )}
        {section === 'quizzes' && (
          <Typography>Quizzes content goes here.</Typography>
        )}
        {section === 'scenarios' && (
          <Typography>Scenarios content goes here.</Typography>
        )}
        {section === 'protocols' && (
          <Typography>Protocol Rules content goes here.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default NatureCodesPage;
