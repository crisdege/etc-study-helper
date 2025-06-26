import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate, useParams, Outlet } from 'react-router-dom';

const NatureCodesNavBar = () => {
  const navigate = useNavigate();
  const { section } = useParams();

  const handleTabChange = (event, newValue) => {
    navigate(`/nature/${newValue}`);
  };

  return (
    <Box sx={{ width: '100%', margin: 'auto', mt: 4, px: 2 }}>
      <Tabs value={section} onChange={handleTabChange} centered sx={{ mb: 3 }}>
        <Tab label="Call Processing" value="calls" />
        <Tab label="Flashcards" value="flashcards" />
        <Tab label="Quizzes" value="quizzes" />
        <Tab label="Scenarios" value="scenarios" />
        <Tab label="Protocols" value="protocols" />
      </Tabs>

      {/* Renders the content of the active tab */}
      <Outlet />
    </Box>
  );
};

export default NatureCodesNavBar;
