import React, { Component } from 'react';

import axios from 'axios';

class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
      }
    };
  }

  addUser = (event) => {
    event.preventDefault();

    let newUser = {
      name: this._inputName.value,
      email: this._inputEmail.value,
      password: this._inputPassword.value,
    }

    this.setState(() => {
      return ({
        user: newUser
      })
    });

    this._inputName.value = '';
    this._inputEmail.value = '';
    this._inputPassword.value = '';

  }


  render() {
    return (
      <div className="signup-data">
        <h2>Signup</h2>
        <form onSubmit={this.addUser}>
          <input ref={(element1) => { this._inputName = element1; }} type="text" placeholder="Your name" /> <p className="input-name-error"></p><br />
          <input ref={(element2) => { this._inputEmail = element2; }} type="email" placeholder="Email address" /> <p className="input-email-error"></p><br />
          <input ref={(element3) => { this._inputPassword = element3; }} type="text" placeholder="Password" /> <p className="input-password-error"></p><br />
          <input type="text" placeholder="Confirm password" /> <p className="input-confirm-password-error"></p><br />
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}


export default SignUp;