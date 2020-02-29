import React from 'react';
import {Component} from 'react';
import { Grid, Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import WishListContainer from './components/WishListContainer';
import SendList from './components/SendList'
import Header from './components/Header';
import SelectedList from './components/SelectedList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    }
  }

  likeItem = (id) => {
    let selections = this.state.selected;
    if (selections.includes(id)) {
      const index = selections.indexOf(id);
      selections.splice(index, 1);
    }
    else {
    selections.push(id);
    }

    this.setState({selected: selections})
  }
  render () {
    return(
    <div >
      <Container>
        <Grid container spacing={3}>
          <Header />
          <WishListContainer likeItem={this.likeItem} selected={this.state.selected} />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
          <SendList />
          </Grid>
          <Grid item xs={6}>
          <SelectedList selected={this.state.selected}/>
          </Grid>
        </Grid>
      </Container>
    </div>
    )
  };
}

export default App;
