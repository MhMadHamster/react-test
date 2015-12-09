import React from 'react';
import User from './User.jsx';

import styles from '../../styles/base.css';

class UserList extends React.Component {
  render() {
    return (
      <div className={styles.list_wrapper}>
        <ul>{
          this.props.users.map(user => {
            return (
              <User
                key = {user.id}
                user = {user}
              />
            )
          })
        }</ul>
      </div>
    )
  }
}

UserList.propTypes = {
  users: React.PropTypes.array.isRequired
}

export default UserList;