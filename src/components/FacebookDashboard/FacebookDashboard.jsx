import React, { Component } from 'react';

import './FacebookDashboard.css';

export default class FacebookDashboard extends Component {
  render() {
    const { dataUser } = this.props;
    const fullName = dataUser.name;
    const email = dataUser.email;
    const imgProfile = dataUser.picture.data.url;

    console.log(this.props.dataUser);
    return (
      <div className="facebook">
        <div className="board-facebook">
          <img src={imgProfile} alt={fullName} className="imgFacebook" />
          <h3>{fullName}</h3>
          <span>{email}</span>

          <button onClick={() => this.props.handleLogout()} className="google-logout">
            <i className="far fa-sign-out-alt"></i>Logout
          </button>
        </div>
      </div>
    );
  }
}
