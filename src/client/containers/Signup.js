import React from 'react'
import {NavLink} from 'react-router-dom'

class Signup extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.createUser}>
          <label>
            First Name:
            <input type="text" name="first_name" />
          </label>
          <label>
            Last Name:
            <input type="text" name="last_name" />
          </label>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <input type="submit" value="Sign Up" />
        </form>
        <NavLink to="/login"> Log In </NavLink>
        <br/>
        <NavLink to="/">Return to HomePage</NavLink>
      </div>
    )
  }
}
export default Signup
