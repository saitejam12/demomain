import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme=>({
root:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}
}))

const Play = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            Some random shit goes here.
        </div>
    )
}
export default Play