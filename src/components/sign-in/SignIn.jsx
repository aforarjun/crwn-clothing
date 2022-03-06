import React, { Component } from 'react';

import './SignIn.scss';
import CustomBtn from '../custom-btn/CustomBtn';
import FormInput from '../form-input/FormInput';
import { signInWithgoogle } from '../../firebase/firebase.utils'

export class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = (e) =>{
        const {value, name} = e.target;
        this.setState({ [name]: value });

        console.log(this.state)
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        this.setState({emial: '', password: ''});
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