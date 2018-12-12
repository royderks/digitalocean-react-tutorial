import React, { Component } from 'react';
import Table from './components/Table.js';
import logo from './assets/DO_Logo_icon_blue.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          droplets: []
      }
  }

  componentDidMount() {
  	fetch('http://localhost:3000/api/droplets')
  	.then(res => res.json())
  	.then(json => json.droplets)
  	.then(droplets => this.setState({ 'droplets': droplets }))
  }

  render() {
    return (
        <div className="App">
          <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="./">
              <img src={logo} alt="logo" width="40" /> My Droplets
            </a>
          </nav>
          <Table droplets={ this.state.droplets } />
        </div>
      );
    }
}

export default App;
