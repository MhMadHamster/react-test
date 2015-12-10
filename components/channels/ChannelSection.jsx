import React, {Component} from 'react';
import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

import panel from '../../styles/panel.css';

class ChannelSection extends Component {
  render() {
    return (
      <div className={panel.panel}>
        <div className={panel.panel_heading}>
          <strong>Channels</strong>
        </div>
        <div className={panel.panel_body}>
          <ChannelList {...this.props} />
          <ChannelForm {...this.props} />
        </div>
      </div>
    )
  }
}

ChannelSection.propTypes = {
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  addChannel: React.PropTypes.func.isRequired,
  activeChannel: React.PropTypes.object.isRequired
}

export default ChannelSection