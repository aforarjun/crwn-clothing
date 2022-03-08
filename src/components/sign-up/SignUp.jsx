import React, { Component } from 'react';

import './sign-up.scss';
import FormInput from '../form-input/FormInput';
import CustomBtn from '../custom-btn/CustomBtn';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

export class SignUp extends Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = async (e) =>{
        const {value, name} = e.target;
        await this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();
    
        const { displayName, email, password, confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            alert("Sign Up Successfull!!");
        } 
        catch (error) {
            console.error(error);
        }
    }

    render(){
        return (
            <div className='sign-up'>
                <h2 className="title">Create New Account</h2>

                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        label="Display Name"
                        required
                    />
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
                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    
                    <CustomBtn type="submit">Register Now</CustomBtn>
                </form>
            </div>
        )
    }
}

export default SignUp