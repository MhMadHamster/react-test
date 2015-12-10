import React from 'react';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

import panel from '../../styles/panel.css';
import message from '../../styles/message.css';

class MessageSection extends React.Component {
  render() {
    let {activeChannel} = this.props;
    return (
      <div className={message.messageContainer}>
        <div className={panel.panel_heading}>{activeChannel.name}</div>
        <div className={panel.panel_body}>
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
