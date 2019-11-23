import React from 'react';
import { Route, Switch } from "react-router-dom";

import DialogsList from './DialogsList/DialogsList.js';

import './messagesPage.scss';

const MessagePage = () => (
   <div className="message-page">
      <Switch>
         <Route path="/im/">
            <DialogsList />
         </Route>
      </Switch>
   </div>
);

export default MessagePage;
