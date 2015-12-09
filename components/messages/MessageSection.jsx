import React from 'react';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

import styles from '../../styles/base.css';

class MessageSection extends React.Component {
  render() {
    let {activeChannel} = this.props;
    return (
      <div className={styles.message_cotnainer}>
        <div className={styles.panel_heading}>{activeChannel.name}</div>
        <div className={styles.panel_body}>
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
