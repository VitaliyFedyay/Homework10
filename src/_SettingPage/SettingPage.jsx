import React from 'react';
import { connect } from 'react-redux';
import { userActions } from './../actions/user.actions';

const Container = {
  marginTop: '5%',
  margin: '0 auto',
  width: '700px',
  height: '500px',
  background: '#fff',
  borderRadius: '15px',
  textAlign: 'center'
}

const Button = {
  margin: "5px"
}

class SettingPage extends React.Component {
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
      <div className="col-sm-8 col-sm-offset-2" style={{ color: '#fff' }}>
        <h2 style={{ textAlign: "center" }}>Create new user setting:</h2>
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
            <button style={Button} className="btn btn-primary">Change user setting</button>
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
const connectedSettingPage = connect(mapStateToProps)(SettingPage);
export { connectedSettingPage as SettingPage };