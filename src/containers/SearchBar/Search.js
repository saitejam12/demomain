import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { heros, quotes } from '../../constants/index';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '10vh',
    flexDirection: 'row',
    margin: 'auto',
    padding: theme.spacing(10),
    alignItems: 'flex-end',
  },
  autoComplete: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const random = quotes[Math.floor(Math.random() * quotes.length)];
console.log(random);

const Search = hero => {
  const classes = useStyles();
  const [name, setName] = React.useState(hero);
  const handleChange = e => {
    setName(e.target.value);
  };

  const searchBar = (
    <div className={classes.autoComplete}>
      <Autocomplete
        options={heros.map(hero => hero)}
        freeSolo
        disableOpenOnFocus
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="Hero Name" size="small" variant="outlined" fullWidth onChange={handleChange} value={name} />
        )}
      />
    </div>
  );
  return (
    <div className={classes.root}>
      <Typography>{random[0]}</Typography>
      {searchBar}
      <Typography>{random[1]}</Typography>
    </div>
  );
};

export default Search;
