import React from 'react'
import {NavLink} from 'react-router-dom'

class Header extends React.Component {

  render(){
    return(
      <div className="App-header">
        <div>
          <h2>Welcome Back, {this.props.user.first_name}!</h2>
        </div>
        <div className="cart">
          <NavLink to='/cart' activeClassName='cart-checkout' activeStyle={{}}>Cart</NavLink>
        </div>
        <div className="signOut">
          { /* <button onClick={this.props.logOut}>Sign Out</button> */}
          <NavLink to="/" onClick={this.props.logOut}>Sign Out</NavLink>
        </div>
        <span className="headerText"><NavLink to='/' activeClassName='homepage' activeStyle={{}}>JP Chigne Draws</NavLink></span>
          <div className="headerLinks">
            <a href="">Shop Prints</a>
            <a href="">Custom Art</a>
            <a href="">Bio</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
          </div>
      </div>
    )
  }
}
export default Header
