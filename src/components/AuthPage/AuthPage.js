import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { LoginPage } from './LoginPage/LoginPage.js';
import { RegisterPage } from './RegisterPage/RegisterPage.js';

import './authPage.scss';

const AuthPage = () => (

   <Router>
      <Route path="/login">
         <LoginPage />
      </Route>
      <Route path="/register">
         <RegisterPage />
      </Route>
   </Router>
);

export default AuthPage;


