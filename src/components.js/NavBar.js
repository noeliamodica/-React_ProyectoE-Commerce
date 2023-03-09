import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logo.png'
import { makeStyles } from '@mui/material';


const useStyles = makeStyles ((theme) =>({
    root:{
        flexGrow:1
    },
    menuButton:{
        marginRight: theme.spacing(2),
    },
    title:{
        flexGrow:1,
    },

})
)


export default function Bar() {
    const classes = useStyles();
  return (
    <Box className={classes.root} >
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton}  >
            
            <img src= {logo} alt='logo' width='75px'/>
          
            
          </IconButton>
          <Typography variant="h6"  className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
