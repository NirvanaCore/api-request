import './scss/App.scss';
import React, { Component } from 'react';
import Header from './component/Header';
import Users from './component/Users';
import axios from 'axios';

class App extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get('https://randomuser.me/api').then((res) => {
      const persons = res.data.results[0];
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Users users={this.state.persons}/>
      </div>
    );
  }
}

export default App;
