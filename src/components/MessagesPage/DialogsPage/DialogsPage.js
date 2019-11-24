import React from 'react';

import Search from './Search/Search.js';
import DialogsList from './DialogsList/DialogsList.js';

import './dialogsPage.scss';

const DialogsPage = () => (
   <div className="dialogs">
      <Search />
      <DialogsList />
   </div>
);

export default DialogsPage;
