import React from 'react';
import { makeStyles } from '@material-ui/core';
import Search from '../containers/SearchBar/Search';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffee',
  },
}));

const Play = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Search />
      Some random shit goes here.
    </div>
  );
};
export default Play;
