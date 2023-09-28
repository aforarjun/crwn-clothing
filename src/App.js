import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Header from './components/header/header';
import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop-page/shop-page';
import SignInSignUpPage from './Pages/sign-in-page/SignInSignUpPage';
import Errorpage from './Pages/error-page/Errorpage';

// redux==========================
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckOutPage from './Pages/checkout-page/CheckOutPage';


const App = (props) => {

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />

        <Route exact path="/sign-in" element={<SignInSignUpPage />} />

        <Route path='/checkout' element={<CheckOutPage />} />

        <Route path='*' element={<Errorpage />} />
      </Routes>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
