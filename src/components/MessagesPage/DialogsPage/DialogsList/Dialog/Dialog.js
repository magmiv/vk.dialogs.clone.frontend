import React from 'react';

import './dialog.scss';

const Dialog = () => (
   <div className="dialog">
      <div className="image-wrapper">
         <img src="https://sun9-32.userapi.com/c858120/v858120477/5f4dd/2BZY9AMLBpw.jpg" alt=""></img>
      </div>
      <div className="dialog-info">
         <div className="top-line">
            <span className="dialog-name">Ванечка Мягкий</span>
            <span className="time">18:34</span>
         </div>
         <div className="last-message">
            <img src="https://sun9-32.userapi.com/c858120/v858120477/5f4dd/2BZY9AMLBpw.jpg" alt=""></img>
            <span className="unread">Хочу поздравить всех с успешным окончанием верстки страницы сообщений  </span>
         </div>
      </div>
   </div>
);

export default Dialog;
