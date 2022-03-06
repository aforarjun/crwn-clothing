import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header';
import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop-page/shop-page';
import SignInSignUpPage from './Pages/sign-in-page/SignInSignUpPage';

import Errorpage from './Pages/error-page/Errorpage';

import { auth } from './firebase/firebase.utils'

export class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribefromAuth = null;

  componentDidMount(){
    this.unsubscribefromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user });

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/sign-in" element={<SignInSignUpPage />} />
  
          <Route path='*' element={<Errorpage />} />
        </Routes>
      </div>
    )
  }
}

export default App;
