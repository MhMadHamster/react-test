import React from 'react';
import Message from './Message.jsx';

import message from '../../styles/message.css';

class MessageList extends React.Component {
  render() {
    return (
      <ul className={message.messageList}>{
        this.props.messages.map(message => {
          return <Message
            key={message.id}
            message={message}
          />
        })
      }</ul>
    );
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired
}

export default MessageList;
