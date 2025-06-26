import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from '@mui/material';
import NatureIcon from '@mui/icons-material/Nature';
import RadioIcon from '@mui/icons-material/Radio';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Nature Codes',
      description: 'Study EMD, EFD & EPD Nature codes.',
      icon: <NatureIcon sx={{ fontSize: 60, color: 'green' }} />,
      route: '/nature/calls',
    },
    {
      title: 'Radio',
      description: 'Study 10-codes and CAD commands.',
      icon: <RadioIcon sx={{ fontSize: 60, color: 'dodgerblue' }} />,
      route: '/radio',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Study Dashboard
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph>
        Choose a section to begin your training.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {sections.map((section) => (
          <Grid item xs={12} sm={6} key={section.title} sx={{ width: 400 }}>
            <Card
              sx={{
                hight: 400,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
              elevation={4}
            >
              <CardActionArea onClick={() => navigate(section.route)}>
                <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
                  {section.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" align="center" gutterBottom>
                    {section.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    color="text.secondary"
                  >
                    {section.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LandingPage;
