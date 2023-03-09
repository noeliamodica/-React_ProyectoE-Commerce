import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logo.png'






export default function Bar() {

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <IconButton edge='start' >
            
            <img src= {logo} alt='logo' width='75px'/>
          
            
          </IconButton>
          <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }}>
            Hello Gues
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
