import React from 'react';

class User extends React.Component {
  render() {
    return (
      <li>
        {this.props.user.name}
      </li>
    )
  }
}

User.propTypes = {
  user: React.PropTypes.object.isRequired
}

export default User;