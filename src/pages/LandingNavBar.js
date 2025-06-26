// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Menu,
//   MenuItem,
//   Box,
// } from '@mui/material';
// import { Link as RouterLink } from 'react-router-dom';

// const navItems = [
//   { label: 'Remember', to: '/remember' },
//   { label: 'Flashcards', to: '/flashcards' },
//   { label: 'Quizzes', to: '/quizzes' },
//   { label: 'Scenarios', to: '/scenarios' },
//   { label: 'Protocol Rules', to: '/protocols' },
// ];

// const LandingNavbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMouseEnter = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMouseLeave = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" color="primary">
//       <Toolbar>
//         {/* Main site title or logo */}
//         <Button
//           component={RouterLink}
//           to="/etc-study-helper"
//           color="inherit"
//           sx={{
//             fontSize: '1.25rem',
//             fontWeight: 'bold',
//             textTransform: 'none',
//             mr: 2,
//           }}
//         >
//           Study Dashboard
//         </Button>

//         {/* Nature Codes with dropdown */}
//         <Box
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           sx={{ position: 'relative' }}
//         >
//           <Button
//             color="inherit"
//             aria-controls={anchorEl ? 'nature-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={anchorEl ? 'true' : undefined}
//           >
//             Nature Codes
//           </Button>

//           <Menu
//             id="nature-menu"
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             MenuListProps={{ onMouseLeave: handleMouseLeave }}
//             anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//             transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//           >
//             {navItems.map(({ label, to }) => (
//               <MenuItem
//                 key={label}
//                 component={RouterLink}
//                 to={to}
//                 onClick={() => setAnchorEl(null)}
//               >
//                 {label}
//               </MenuItem>
//             ))}
//           </Menu>
//         </Box>

//         {/* Radio link */}
//         <Button
//           color="inherit"
//           component={RouterLink}
//           to="/radio"
//           sx={{ ml: 2 }}
//         >
//           Radio
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default LandingNavbar;
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Box } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Call Process', to: '/calls' },
  { label: 'Flashcards', to: '/flashcards' },
  { label: 'Quizzes', to: '/quizzes' },
  { label: 'Scenarios', to: '/scenarios' },
  { label: 'Protocol Rules', to: '/protocols' },
];

const LandingNavbar = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const path = location.pathname;

  // Determine which button(s) to show
  const isOnRadio = path.startsWith('/radio');
  const isOnNatureCodes = [
    '/nature/calls',
    '/nature/flashcards',
    '/nature/quizzes',
    '/nature/scenarios',
    '/nature/protocols',
    '/nature-codes',
  ].some((p) => path.startsWith(p));

  const showNatureCodesBtn = isOnRadio;
  const showRadioBtn = isOnNatureCodes;

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Home button */}
        <Button
          component={RouterLink}
          to="/etc-study-helper"
          color="inherit"
          sx={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            textTransform: 'none',
            mr: 2,
          }}
        >
          Study Dashboard
        </Button>

        {/* Show Nature Codes dropdown only when on Radio page */}
        {showNatureCodesBtn && (
          <Button
            component={RouterLink}
            to="/nature/calls"
            color="inherit"
            sx={{ ml: 2 }}
          >
            Nature Codes
          </Button>
        )}

        {/* Show Radio button only on Nature Codes pages */}
        {showRadioBtn && (
          <Button
            component={RouterLink}
            to="/radio"
            color="inherit"
            sx={{ ml: 2 }}
          >
            Radio
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default LandingNavbar;
