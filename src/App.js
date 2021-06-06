import React, { Component } from 'react';
import Login from './components/Login/Login';
import GoogleDashboard from './components/GoogleDashboard/GoogleDashboard';

import './App.css';
import FacebookDashboard from './components/FacebookDashboard/FacebookDashboard';

export default class App extends Component {
  state = {
    dataUser: null,
    components: 'Login',
  };

  responseGoogle = (response) => {
    const dataUser = response.profileObj;
    this.setState({
      dataUser: dataUser,
      components: 'Google',
    });
  };

  responseFacebook = (response) => {
    this.setState({
      dataUser: response,
      components: 'Facebook',
    });
  };

  handleLogout = () => {
    this.setState({
      dataUser: null,
      components: 'Login',
    });
  };

  switchDisplay = (display) => {
    switch (display) {
      case 'Login':
        return <Login responseGoogle={this.responseGoogle} responseFacebook={this.responseFacebook} />;
      case 'Google':
        return <GoogleDashboard dataUser={this.state.dataUser} handleLogout={this.handleLogout} />;
      case 'Facebook':
        return <FacebookDashboard dataUser={this.state.dataUser} handleLogout={this.handleLogout} />;

      default:
        return <p>KOSONG</p>;
    }
  };

  render() {
    return <div>{this.switchDisplay(this.state.components)}</div>;
  }
}
