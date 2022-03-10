import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header';
import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop-page/shop-page';
import SignInSignUpPage from './Pages/sign-in-page/SignInSignUpPage';
import Errorpage from './Pages/error-page/Errorpage';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// redux==========================
import { connect } from 'react-redux';

import {setCurrentUser} from './redux/user/user.action'


export class App extends Component {

  unsubscribefromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribefromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })

        })
      }

      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }

  render() {
    return (
      <div>
        <Header />
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

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch (setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
