import React,{useState} from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
  ListItemText
} from '@mui/material';
import {
  Email as EmailIcon,
  // Slack as SlackIcon,

} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError(true);
      setEmailHelperText('Please enter a valid email address');
    } else {
      setEmailError(false);
      setEmailHelperText('');
    }
  };

  const handleSubmit=()=>{
    navigate("/success")
  }

  return (

    <Box p={3} border={1} borderRadius={2} borderColor="grey.300">
      <Typography variant="h5" gutterBottom>
        Subscribe for AI-Powered Alerts for Every Vulnerability
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Join thousands of proactive businesses. Get instant, critical vulnerability alerts.
      </Typography>

      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Channel</Typography>
            <Box display="flex" flexWrap="wrap">
              <IconButton title='"Zoom' >
              
                <EmailIcon titleAccess='Zoom' />
                
              </IconButton>
              
              <IconButton>
                <EmailIcon />
              </IconButton> <IconButton>
                <EmailIcon />
              </IconButton> <IconButton>
                <EmailIcon />
              </IconButton> <IconButton>
                <EmailIcon />
              </IconButton> <IconButton>
                <EmailIcon />
              </IconButton> <IconButton>
                <EmailIcon />
              </IconButton> <IconButton>
                <EmailIcon />
              </IconButton> <IconButton>
                <EmailIcon />
              </IconButton>
              


              <IconButton>
                <EmailIcon />
              </IconButton>

            
            </Box>
          </Grid>

          <Grid item xs={12}>
          <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              helperText={emailHelperText}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label="Webhook URL" variant="outlined" />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2">Severity</Typography>
            <Box display="flex" justifyContent="space-between">
              {['Critical', 'High', 'Medium', 'Low'].map((severity) => (
                <FormControlLabel
                  control={<Checkbox />}
                  label={severity}
                  key={severity}
                />
              ))}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2">Type</Typography>
            <Box display="flex" justifyContent="space-between">
              {['Zero-Day', 'OWASP top10', 'KEV'].map((type) => (
                <FormControlLabel
                  control={<Checkbox />}
                  label={type}
                  key={type}
                />
              ))}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2">Ecosystem</Typography>
            <Select
              fullWidth
              multiple
              value={[]}
              renderValue={(selected) => selected.join(', ')}
              variant="outlined"
            >
              {['Microsoft', 'Ubuntu', 'Debian', 'SUSE', 'Red Hat'].map((ecosystem) => (
                <MenuItem key={ecosystem} value={ecosystem}>
                  <Checkbox />
                  <ListItemText primary={ecosystem} />
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2">Frequency</Typography>
            <Box display="flex" justifyContent="space-between">
              {['Real-time', 'Daily', 'Weekly'].map((frequency) => (
                <FormControlLabel
                  control={<Checkbox />}
                  label={frequency}
                  key={frequency}
                />
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12}>
            <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
              Subscribe for free trial dgwgd
            </Button>
          </Grid>
        </Grid>
      </Box>

      
    </Box>
  );
};

export default Home;
