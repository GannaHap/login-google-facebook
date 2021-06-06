import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import './Login.css';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Login</h2>

        <div className="board">
          <span>Sign in with</span>

          <GoogleLogin
            clientId="41956188594-jt08lstll8u18307qkehcod8rjehnbb9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.props.responseGoogle}
            onFailure={this.props.responseGoogle}
            cookiePolicy={'single_host_origin'}
            icon={true}
          />

          <FacebookLogin appId="1190413591463662" autoLoad={false} fields="name,email,picture" callback={this.props.responseFacebook} cssClass="fb-btn" icon="fab fa-facebook-f" textButton="Login" />
        </div>
      </div>
    );
  }
}
