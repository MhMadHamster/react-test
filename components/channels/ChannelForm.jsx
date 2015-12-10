import React from 'react';

class ChannelForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    if(!this.refs.channel.value) return;
    const node = this.refs.channel;
    const channelName = node.value;
    this.props.addChannel(channelName);
    node.value = '';
  }
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input
          placeholder='Add Channel'
          type='text'
          ref='channel'
        />
      </form>
    )
  }
}

ChannelForm.propTypes = {
  addChannel: React.PropTypes.func.isRequired
}

export default ChannelForm;