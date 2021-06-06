import React, { Component } from 'react';

import './GoogleDashboard.css';

export default class GoogleDashboard extends Component {
  render() {
    const { dataUser } = this.props;
    const { email, givenName, imageUrl, name } = dataUser;
    return (
      <div className="google">
        <h3>Hello, {givenName}</h3>

        <div className="google-card">
          <img src={imageUrl} alt={name} className="google-imgProfile" />
          <h3>{name}</h3>
          <span>{email}</span>

          <button onClick={() => this.props.handleLogout()} className="google-logout">
            <i className="far fa-sign-out-alt"></i>Logout
          </button>
        </div>
      </div>
    );
  }
}
