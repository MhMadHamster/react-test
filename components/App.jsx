import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './user/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

import styles from '../styles/base.css';
import panel from '../styles/panel.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      users: [],
      messages: [],
      activeChannel: {
        name: 'Choose channel'
      }
    };
  }
  addChannel(name) {
    let {channels} = this.state;
    channels.push({id: channels.length, name});
    this.setState({channels});
  }
  setChannel(activeChannel) {
    this.setState({activeChannel});
  }
  setUserName(name) {
    let {users} = this.state;
    users.push({id: users.length, name});
    this.setState({users});
  }
  addMessage(body) {
    let {messages, users} = this.state;
    let createdAt = new Date;
    let author = users.length > 0 ? users[0].name : 'Anonymous';
    messages.push({id: messages.length, body, createdAt, author});
    this.setState({messages});
  }
  render() {
    return (
      <div className={styles.app}>
        <div className={panel.panel_container}>
          <ChannelSection
            {...this.state}
            addChannel={this.addChannel.bind(this)}
            setChannel={this.setChannel.bind(this)}
          />
          <UserSection
            {...this.state}
            setUserName={this.setUserName.bind(this)}
          />
        </div>
        <MessageSection
          {...this.state}
          addMessage={this.addMessage.bind(this)}
        />
      </div>
    )
  }
}

export default App