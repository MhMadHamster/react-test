import React from 'react';
import fecha from 'fecha';

class Message extends React.Component {
  render() {
    let {message} = this.props;
    let createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD/YY');
    return (
      <li className='message'>
        <div className='author'>
          {message.author}
          <span className='timestamp'>{createdAt}</span>
          <div className='message-text'>{message.body}</div>
        </div>
      </li>
    );
  }
}

Message.propTypes = {
  message: React.PropTypes.object.isRequired
}

export default Message;
