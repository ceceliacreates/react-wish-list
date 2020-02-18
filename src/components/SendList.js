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

function SendList() {
    const classes = useStyles();
    return (
        <>
        <Grid xs={12}>
            <Typography className={classes.heading} variant="h4">Send Your List</Typography>
            <TextField className={classes.input} required id="sender-email" variant="outlined" defaultValue="Your Email" />
            <TextField className={classes.input} required id="recipient-email" variant="outlined" defaultValue="Recipient Email" />
        </Grid>
        <Grid xs={12}>
            <Button className={classes.button} variant="contained" color="primary">Send</Button>
        </Grid>
        </>
    )
}

export default SendList;

