import React from 'react';
import {Grid, Card, CardHeader, CardMedia, CardContent, Typography, IconButton} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    media: {
      height: 0,
      paddingTop: '56.25%',
    }
  }));

function WishListItem(props) {
    const classes = useStyles();
    return (
        <Grid item xs={3}>
        <Card data-cy="WishListItem">
          <CardHeader
            title={props.name}
            subheader={props.category}
            action={
              <IconButton aria-label="like" data-cy="LikeButton" onClick={() => props.likeItem(props.id)} color={props.selected.includes(props.id) ? "secondary" : "default"}>
                <FavoriteIcon />
              </IconButton>
            }
          >
          </CardHeader>
          <CardMedia
            image="https://via.placeholder.com/150"
            title="Logo"
            className={classes.media}
          />
          <CardContent>
            <Typography variant="body2">
              Proident ipsum ipsum occaecat labore nulla magna eiusmod tempor sit elit.
        </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
}

export default WishListItem;