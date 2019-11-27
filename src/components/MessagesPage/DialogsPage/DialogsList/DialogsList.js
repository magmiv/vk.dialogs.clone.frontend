import React from 'react';

import Dialog from './Dialog/Dialog.js';

import './dialogList.scss';

class DialogsList extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         dialogs: [],
         currentUser: "5dd2425b9aff9435d4ddb977"
      };
   }


   componentDidMount() {
      fetch("http://localhost:3000/dialogs?userId=5dcecfa3697639243471b83e", {
         headers: {
            "Content-Type": "application/json"
         },
      })
         .then(res => res.json())
         .then((dialogs) => {
            this.setState({ dialogs: dialogs });
            console.log(dialogs);
         });
   }

   render() {
      console.log(this.state);
      const dialogs = this.state.dialogs.map(dialog => (
         // TODO right now dialogs will not work, because info data gets from first dialog
         <Dialog key={dialog._id} text={dialog.lastMessage.text} name={dialog.users[0].name + ' ' + dialog.users[0].surname} />
      ));

      return (
         <div className="dialogs-list">
            {dialogs}
         </div>
      );
   }
}

export default DialogsList;
