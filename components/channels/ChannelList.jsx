import React, {Component} from 'react';
import Channel from './Channel.jsx';

import styles from '../../styles/base.css';

class ChannelList extends Component {
  render() {
    return (
      <div className={styles.list_wrapper}>
        <ul>{
          this.props.channels.map(chan => {
            return <Channel
              channel={chan}
              key={chan.id}
              {...this.props}
            />
          })
        }</ul>
      </div>
    )
  }
}

ChannelList.propTypes = {
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  activeChannel: React.PropTypes.object.isRequired
}

export default ChannelList