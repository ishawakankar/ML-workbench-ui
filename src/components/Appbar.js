import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../css/style.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static" className="app">
        <Toolbar>
          <Typography style={{fontSize: '1.7rem'}} className={classes.title}>
            Daggit
          </Typography>
          
          <Typography style={{fontSize: '0.9rem'}}><Button href={`/`} style={{fontFamily: "Sans-serif", color: '#ffffff'}}>ML as a service</Button></Typography>
          {/* <Button color="inherit">Home</Button> */}

        </Toolbar>
      </AppBar>
    </div>
  );
}
