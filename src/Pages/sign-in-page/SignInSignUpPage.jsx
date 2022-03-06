import React, { Component } from 'react';
import SignIn from '../../components/sign-in/SignIn';

import './sign-in-sign-up.scss';

export class SignInSignUpPage extends Component {
  render() {
    return (
      <div className='sign-in-and-sign-us'>
        <SignIn />
      </div>
    )
  }
}

export default SignInSignUpPage;