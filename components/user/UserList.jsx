import React from 'react';
import User from './User.jsx';

class UserList extends React.Component {
  render() {
    return (
      <div className='list-wrapper'>
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