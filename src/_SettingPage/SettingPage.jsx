import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions/user.actions';

const Container = {
  marginTop: '5%',
  margin: '0 auto',
  width: '700px',
  height: '500px',
  background: '#fff',
  borderRadius: '15px',
  textAlign: 'center'
}

class SettingPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  handleDeleteUser(id) {
    return (e) => this.props.dispatch(userActions.delete(id));
  }

  render() {
    const { user, users } = this.props;
    return (
      <div style={Container}>
        <h1>Hi {user.name}!</h1>
        <h3>USER SETTING:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.items &&
          <ul>
            {users.items.map((user, index) =>
              <div key={user.id}>
                <h3>{user.name + ' ' + user.surname + ' ' + user.email} <button onClick={this.handleDeleteUser(user.id)} className="btn btn-primary">Delete</button></h3>
              </div>
            )}
          </ul>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}

const connectedSettingPage = connect(mapStateToProps)(SettingPage);
export { connectedSettingPage as SettingPage };