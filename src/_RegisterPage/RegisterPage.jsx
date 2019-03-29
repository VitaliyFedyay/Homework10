import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from './../actions/user.actions';

const Button = {
  margin: "5px"
}

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.name && user.surname && user.email && user.phone && user.password) {
      dispatch(userActions.register(user));
    }
  }

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className="col-sm-8 col-sm-offset-2">
        <h2 style={{ textAlign: "center" }}>Register</h2>
        <form style={{ width: "70%", margin: "0 auto" }} name="form" onSubmit={this.handleSubmit}>

          <div className={'form-group' + (submitted && !user.name ? ' has-error' : '')}>
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" value={user.name} onChange={this.handleChange} />
            {submitted && !user.name &&
              <div className="help-block">First Name is required</div>
            }
          </div>

          <div className={'form-group' + (submitted && !user.surname ? ' has-error' : '')}>
            <label htmlFor="surname">Surname</label>
            <input type="text" className="form-control" name="surname" value={user.surname} onChange={this.handleChange} />
            {submitted && !user.surname &&
              <div className="help-block">Last Name is required</div>
            }
          </div>

          <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
            {submitted && !user.email &&
              <div className="help-block">email is required</div>
            }
          </div>

          <div className={'form-group' + (submitted && !user.phone ? ' has-error' : '')}>
            <label htmlFor="phone">Phone</label>
            <input type="text" className="form-control" name="phone" value={user.phone} onChange={this.handleChange} />
            {submitted && !user.phone &&
              <div className="help-block">phone is required</div>
            }
          </div>

          <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
            {submitted && !user.password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-group">
            <button style={Button} className="btn btn-primary">Register</button>
            {registering &&
              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            }
            <Link style={Button} to="/login" className="btn btn-primary">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
    registering
  };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };