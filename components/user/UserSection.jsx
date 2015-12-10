import React from 'react';
import UserList from './UserList.jsx';
import UserForm from './UserForm.jsx';

import panel from '../../styles/panel.css';

class UserSection extends React.Component {
  render() {
    return (
      <div className={panel.panel}>
        <div className={panel.panel_heading}>
          <b>Users</b>
        </div>
        <div className={panel.panel_body}>
          <UserList {...this.props} />
          <UserForm {...this.props} />
        </div>
      </div>
    )
  }
}

UserSection.propTypes = {
  users: React.PropTypes.array.isRequired,
  setUserName: React.PropTypes.func.isRequired
}

export default UserSection;