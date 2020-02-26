import React from 'react';
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    header: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <Typography variant="h2" className={classes.header} align="center">
                Wish List
</Typography>
        </Grid>
    )
}

export default Header;

