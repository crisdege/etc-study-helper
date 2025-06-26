import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const CallsProcessPage = () => {
  return (
    <Box
      sx={{
        maxWidth: 700,
        margin: '40px auto',
        padding: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 3,
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Orange County 9-1-1, what is the address of your emergency? (Repeat,
          unless it matches ALI.)
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          What's the phone number you are calling from? (Repeat, unless it
          matches ANI. Say VERIFIED if it matches.)
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          What's your name?
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Okay, tell me exactly what happened.
        </Typography>
      </Paper>
    </Box>
  );
};

export default CallsProcessPage;
