import React from 'react'
import {NavLink} from 'react-router-dom'

class Login extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.fetchUser}>
          <label>
            Username:
            <input onChange={this.props.loginAttempt} type="text" name="username" />
          </label>
          <label>
            Password:
            <input onChange={this.props.loginAttempt} type="password" name="password" />
          </label>
          <input type="submit" value="Log In" />
        </form>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    )
  }
}
export default Login
