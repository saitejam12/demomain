/* eslint-disable no-eval */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { heros, quotes } from '../../constants/index';
import dice from '../Assets/media/dice.svg';

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
  roll: {
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.short,
    }),
  },
  dice: {
    transform: 'rotate(7200deg)',
  },
  image: {
    height: '32px',
    width: '32px',
  },
}));

const Search = hero => {
  const classes = useStyles();
  const [name, setName] = React.useState(hero);
  const [animate, setAnimate] = React.useState(false);

  const random = quotes[Math.floor(Math.random() * quotes.length)];

  const trigger = () => {
    setTimeout(() => {
      setAnimate(true);
      const random = heros[Math.floor(Math.random() * heros.length)];
      setName(random);
    }, 200);
    setAnimate(false);
  };

  const searchBar = (
    <div className={classes.autoComplete}>
      <Autocomplete
        freeSolo
        disableOpenOnFocus
        disableClearable
        value={name}
        options={heros.map(hero => hero)}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField
            {...params}
            label="Hero Name"
            size="small"
            variant="outlined"
            fullWidth
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  <InputAdornment position="end">
                    <IconButton
                      disableRipple
                      onClick={trigger}
                      className={animate ? `${classes.roll} ${classes.dice}` : null}
                    >
                      <img src={dice} alt="dice" className={classes.image} />
                    </IconButton>
                  </InputAdornment>
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
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
