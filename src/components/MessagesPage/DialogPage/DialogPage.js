import React from 'react';

import Header from './Header/Header.js';
import MessagesList from './MessagesList/MessagesList.js';

import './dialogPage.scss';

const DialogPage = () => (
   <div className="dialog-page">
      <Header />
      <MessagesList />
   </div>
);

export default DialogPage;
