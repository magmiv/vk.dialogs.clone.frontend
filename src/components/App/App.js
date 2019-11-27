import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Imports with .js file extension makes for comfortable development
import MessagePage from '../MessagesPage/MessagesPage.js';
import AuthPage from '../AuthPage/AuthPage.js';
import Header from '../Header/Header.js';

import './app.scss';

const App = () => (
   <Router>
      <Header />
      <div className="wrapper">
         <Switch>
            <Route path="/im">
               <MessagePage />
            </Route>
            <Route path="/im/:string">
               <MessagePage />
            </Route>
            <Route path="/">
               <AuthPage />
            </Route>
         </Switch>
      </div>
   </Router>
);

export default App;
