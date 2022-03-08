import React, { Component } from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

import './sign-in-sign-up.scss';

export class SignInSignUpPage extends Component {
  render() {
    return (
      <div className='sign-in-and-sign-us'>
        <SignIn />
        <SignUp />
      </div>
    )
  }
}

export default SignInSignUpPage;