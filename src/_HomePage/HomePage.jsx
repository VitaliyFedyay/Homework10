import React from 'react';
import { connect } from 'react-redux';
import { SettingPage } from './../_SettingPage/SettingPage';
import ToDoPage from './../_ToDoPage/ToDoPage';
import LoginPage from './../_LoginPage/LoginPage';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

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
  render() {
    return (
      <Router>
        <div>
          <div style={Wrapper}>
            <nav style={Nav}>
              <div style={But}>
                <Link onClick="Router.dispatch(location.getCurrentPath(), null)" to="/login">Logout</Link>
              </div>
              <div style={But}>
                <Link to="/setting">Setting</Link>
              </div>
              <div style={But}>
                <Link to="/todo">Home</Link>
              </div>
            </nav>
          </div>
          <Switch>

            <Route path="/setting" component={SettingPage} />
            <Route path="/todo" component={ToDoPage} />
            <Redirect path="/login" component={LoginPage} />

          </Switch>
        </div>
      </Router>

    )
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