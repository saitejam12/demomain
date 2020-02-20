import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Play from './Play';
const useStyles = makeStyles(theme => ({
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
  AppBody1: {
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
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <header className={classes.AppHeader}>
        <p>How To Demo.me</p>
      </header>
      <div className={classes.AppBody2}>
        <Link to="/play" style={{ textDecoration: 'none', outline: 'none' }}>
          <img src={require('../containers/Assets/demomain/drow.png')} alt="drow" />
        </Link>
        <div>
          <p>Currently Re-Coding howdoiplay.com</p>
        </div>
      </div>
      <div className={classes.AppBody3}>
        <div>
          <p>This content originally belongs to this guy here -></p>

          <p>Click on Him to go see the original -></p>
        </div>
        <a href="https://howdoiplay.com" target="blank">
          <img src={require('../containers/Assets/demomain/tsunami.png')} alt="tsunami643" />
        </a>
      </div>
    </>
  );
};

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Router basename="/demomain">
        <Switch>
          <Route exact path="/play" component={Play} />
          <Route path="/" component={Home} />
          
        </Switch>
      </Router>
    </div>
  );
};

export default App;
