import React from 'react';
import { makeStyles } from '@material-ui/core';
import Search from '../containers/SearchBar/Search';
import Tips from '../containers/Tips/Tips';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
}));

const Play = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Search />
      <Tips />
      Some random shit goes here.
    </div>
  );
};
export default Play;
