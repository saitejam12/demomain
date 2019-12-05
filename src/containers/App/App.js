import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme=>({

  App: {
    textAlign: 'center',
  },
  
  AppLogo: {
    height: '40vmin',
  },
  
  AppHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    color: 'white',
  },
  AppBody1 :{
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    fontSize: '2rem',
    color: 'white',
  },
  AppBody2: {
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'right',
    fontSize: '2rem',
    color: 'black',
  },
  AppBody3: {
    backgroundColor: '#927346',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    fontSize: '2rem',
    color: 'white',
  },
  
  AppLink: {
    color: '#09d3ac',
  }
  

}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Router >
      <header className={classes.AppHeader}>
        <p>How To Demo.me</p>
      </header>
      <div className={classes.AppBody2}>
        <img src={require("../Assets/drow.png")} alt='drow' />
        <div>
          <p>Currently Demoing howdoiplay.com</p>
        </div>
      </div>
      <div className={classes.AppBody3}>
        <div>
          <p>This content originally belongs to this guy here -></p>

          <p>Click on Him to go see the original -></p>
        </div>
        <a href='https://howdoiplay.com' target='blank'>
          <img src={require("../Assets/tsunami.png")} alt='tsunami643' />
        </a>
      </div>
      </Router>
    </div>
  );
}

export default App;
