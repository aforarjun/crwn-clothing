import React, { useState } from 'react';

import './sign-up.scss';
import FormInput from '../form-input/FormInput';
import CustomBtn from '../custom-btn/CustomBtn';
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

const SignUp = () => {
    const [state, setState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = async (e) => {
        const { value, name } = e.target;
        await setState({ [name]: value });
    }

    const handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
    }

    return (
        <div className='sign-up'>
            <h2 className="title">Create New Account</h2>

            <form onSubmit={handleSubmit} >
                <FormInput
                    type="text"
                    name="displayName"
                    value={state.displayName}
                    handleChange={handleChange}
                    label="Display Name"
                    required
                />
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
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={state.confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                />

                <CustomBtn type="submit">Register Now</CustomBtn>
            </form>
        </div>
    )
}

export default SignUp