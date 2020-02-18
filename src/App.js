import React from 'react';
import { Grid, Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import WishListContainer from './components/WishListContainer';
import SendList from './components/SendList'
import Header from './components/Header';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Header />
          <WishListContainer />
          <SendList />
        </Grid>
      </Container>
    </div>

  );
}

export default App;
