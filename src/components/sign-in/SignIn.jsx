import React, { useState } from 'react';

import './SignIn.scss';
import CustomBtn from '../custom-btn/CustomBtn';
import FormInput from '../form-input/FormInput';

const SignIn = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleChange = async (e) => {
    const { value, name } = e.target;
    await setState({ [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = state;
  }

  const signInWithGoogle = () => { }

  return (
    <div className='sign-in'>
      <h2 className='title'>I alrready habe an account</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={state.email}
          handleChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={state.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        {
          // <div className='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        }
        <div className="btn-box">
          <CustomBtn type="submit">Sign In</CustomBtn>
          <CustomBtn onClick={signInWithGoogle}>Sign In With Google</CustomBtn>
        </div>
      </form>
    </div>
  )

}

export default SignIn