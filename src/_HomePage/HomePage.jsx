import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from './../actions/user.actions';
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Content } from './Content';

const Wrapper = {
  color: "black",
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%"
}

const Nav = {
  width: "100%",
  height: "50px",
  backgroundColor: "black"
}

const But = {
  paddingRight: "40px",
  display: "block",
  float: "right",
  fontSize: "30px",
  height: "100%",
  border: "4px solid black"
}

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  handleDeleteUser(id) {
    return (e) => this.props.dispatch(userActions.delete(id));
  }

  render() {
    const { user, users } = this.props;
    return (
      <div style={Wrapper}>
        <nav style={Nav}>
         <div style={But}>
          <Link to="/login">Logout</Link>
          </div>
          <div style={But}>
          <Link to="/">Home</Link>
          </div>
        </nav>
       
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

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };