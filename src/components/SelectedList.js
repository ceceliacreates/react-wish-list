import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import SelectedListItem from './SelectedListItem.js';
import products from '../products.json'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    media: {
      height: 0,
      paddingTop: '5rem',
    }
  }));

function SelectedList(props) {
    const classes = useStyles();
        if (props.selected.length > 0) {
            return (
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">Your List</Typography>
                    {props.selected.map(item => (
                        <SelectedListItem name={products.find(product => product.id == item).product_name} />
                    ))}
                </Grid>
            )
        }

        else {
            return (
                <Grid item xs={12}>
                    <Typography variant="h5" align="center" className={classes.media}>
                        Select some items above!
            </Typography>
                </Grid>
            )
        }
    }

    export default SelectedList;