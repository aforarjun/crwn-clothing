import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header';
import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop-page/shop-page';
import SignInSignUpPage from './Pages/sign-in-page/SignInSignUpPage';

import Errorpage from './Pages/error-page/Errorpage';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

export class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribefromAuth = null;

  componentDidMount(){
    this.unsubscribefromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{

          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })

        })
      }

      this.setState({currentUser: userAuth})
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
