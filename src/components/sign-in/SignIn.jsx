import React, { Component } from 'react';

import './SignIn.scss';
import CustomBtn from '../custom-btn/CustomBtn';
import FormInput from '../form-input/FormInput';
import { auth, signInWithgoogle } from '../../firebase/firebase.utils'

export class SignIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = async (e) =>{
    const {value, name} = e.target;
    await this.setState({ [name]: value });
  }

  handleSubmit = async (e) =>{
    e.preventDefault();

    const { email, password } = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });

      alert('Login Successfull');
    } 
    catch (error) {
      console.log(error);
      alert('Incorrect Credentials');
    }

  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I alrready habe an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
            <FormInput 
                type="email" 
                name="email" 
                value={this.state.email} 
                handleChange={this.handleChange} 
                label="Email"
                required 
            />

            <FormInput 
                type="password" 
                name="password" 
                value={this.state.password} 
                handleChange={this.handleChange} 
                label="Password"
                required 
            />
{
            // <div className='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
}
            <div className="btn-box">
              <CustomBtn type="submit">Sign In</CustomBtn>
              <CustomBtn  onClick={signInWithgoogle} isGoogleSignIn>Sign In With Google</CustomBtn>
            </div>
        </form>
      </div>
    )
  }
}

export default SignIn