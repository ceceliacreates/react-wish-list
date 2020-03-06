import React from "react";
import {Grid, Typography, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    heading: {
        padding: theme.spacing(2),
        color: theme.palette.text.primary,
      },
    input: {
      padding: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(1)
    }
  }));

function SendList(props) {
    const classes = useStyles();
    return (
        <>
        <Grid item xs={12}>
            <Typography className={classes.heading} variant="h4">Send Your List</Typography>
            <TextField className={classes.input} onChange={props.handleChange} onClick={props.clearDefault} required id="sender-email" variant="outlined" value={props.sender} />
            <TextField className={classes.input} onChange={props.handleChange} onClick={props.clearDefault} required id="recipient-email" variant="outlined" value={props.recipient} />
        </Grid>
        <Grid item xs={12}>
            <Button className={classes.button} variant="contained" color="primary">Send</Button>
        </Grid>
        </>
    )
}

export default SendList;

