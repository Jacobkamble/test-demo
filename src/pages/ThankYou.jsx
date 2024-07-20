import React from 'react';

import {
  Box,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {

    const navigate=useNavigate()

    const handleSubmit=()=>{
        navigate("/")
      }
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      border={1}
      borderRadius={2}
      borderColor="grey.300"
      p={3}
      bgcolor="white"
    >
      <CheckCircleIcon style={{ fontSize: 80, color: 'green' }} />
      <Typography variant="h4" gutterBottom>
        Thank you for subscribing!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Congratulations! You're now subscribed to receive slack notifications on vulnerabilities.
        Stay informed and stay secure!
      </Typography>
      <Box mt={2} display="flex" gap={2}>
        <Button
        onClick={handleSubmit}

          variant="text"
          startIcon={<ArrowBackIcon />}
          style={{ textTransform: 'none' }}
        >
          Back
        </Button>
        <Button
        onClick={handleSubmit}
          variant="contained"
          color="primary"
          startIcon={<HomeIcon />}
          style={{ textTransform: 'none' }}
        >
          Go Home
        </Button>
      </Box>
    </Box>
  );
};

export default ThankYouPage;
