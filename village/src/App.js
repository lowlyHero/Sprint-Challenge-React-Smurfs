import React, { Component } from 'react';
import axios from 'axios';
import { Router, Route } from 'react-router-dom';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

componentDidMount = () => {
  this.allSmurfs();
}

allSmurfs = () => {
  axios
  .get('http://localhost:3333/smurfs')
  .then((smurfs) => {
    this.setState({ smurfs: smurfs.data })
  })
  .catch((err) => {
    console.log(err);
  })
}

  render() {
    return (
      <div className="App">
        <Route path='/' component={NavBar} />
        <Route path='/smurfs' render={props => {
          return (
            <div>
        <SmurfForm {...props} addSmurf={this.addSmurf} />
        <Smurfs {...props} smurfs={this.state.smurfs} />
            </div>
          )
        }}
        />
      </div>
    );
  }
}

export default App;
