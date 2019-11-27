import React from 'react';

import Message from './Message/Message.js';

import './messagesList.scss';

class MessageList extends React.Component {

   constructor(props) {
      super(props);
      this.state = {

      };
   }


   componentDidMount() {

   }

   render() {
      return (
         <div className="messages-list">
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
         </div>
      );
   }
}

export default MessageList;
