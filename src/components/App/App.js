import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Imports with .js file extension makes for comfortable development
import MessagePage from '../MessagesPage/MessagesPage.js';
import Header from '../Header/Header.js';

const App = () => (
   <Router>
      <Header />
      <Route path="/im">
         <MessagePage />
      </Route>
   </Router>
);

export default App;
