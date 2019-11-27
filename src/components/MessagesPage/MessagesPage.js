import React from 'react';
import { Route, Switch } from "react-router-dom";

import DialogPage from './DialogPage/DialogPage.js';
import DialogsPage from './DialogsPage/DialogsPage.js';

import './messagesPage.scss';

const MessagePage = () => (
   <div className="message-page">
      <Switch>
         <Route path="/im/:string">
            <DialogPage />
         </Route>
         <Route path="/im/">
            <DialogsPage />
         </Route>
      </Switch>
   </div>
);

export default MessagePage;
