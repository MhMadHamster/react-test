import React from 'react';

class UserForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const node = this.refs.userName;
    const userName = node.value;
    this.props.setUserName(userName);
    node.value = '';
  }
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input
          ref='userName'
          type='text'
          className='form-control'
          placeholder='Set your name'
        />
      </form>
    )
  }
}

UserForm.propTypes = {
  setUserName: React.PropTypes.func.isRequired
}

export default UserForm;