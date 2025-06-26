import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const RadioLandingPage = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Radio
      </Typography>
      <Typography variant="h5" color="text.secondary">
        Coming Soon
      </Typography>
    </Container>
  );
};

export default RadioLandingPage;
