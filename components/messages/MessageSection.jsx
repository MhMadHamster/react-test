import React from 'react';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

class MessageSection extends React.Component {
  render() {
    let {activeChannel} = this.props;
    return (
      <div className='message-container panel panel-default'>
        <div className='panel-heading'>{activeChannel.name}</div>
        <div className='panel-body'>
          <MessageList {...this.props} />
          <MessageForm {...this.props} />
        </div>
      </div>
    )
  }
}

MessageSection.propTypes = {
  messages: React.PropTypes.array.isRequired,
  activeChannel: React.PropTypes.object.isRequired,
  addMessage: React.PropTypes.func.isRequired
}

export default MessageSection;
