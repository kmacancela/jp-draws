import React from 'react'
import {NavLink} from 'react-router-dom'

class Header extends React.Component {
  render() {
    return(
      <div className="App-header">
        <div className="topNav">
          {
             this.props.user ?
             <span>Welcome back, {this.props.user.first_name}!</span>
             :
             <span>Welcome Guest!</span>
           }
         <br /><br />


           <NavLink to='/cart' className="nav-item">Cart</NavLink>
           {
             this.props.user ?
             <>
             <NavLink to="/" onClick={this.props.logOut} className="nav-item">Sign Out</NavLink>

               <NavLink to="/orderhistory" className="nav-item">Order History</NavLink>

             </>
             :
             <NavLink to="/login">Sign Up / Log In</NavLink>
           }

       </div>
        <span className="headerText"><NavLink to='/' onClick={this.props.resetSpecs}>JP Chigne Draws</NavLink></span>
        <br />
        Online Store
          {/*<div className="headerLinks">
            <a href="">Shop Prints</a>
            <a href="">Custom Art</a>
            <a href="">Bio</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
          </div>*/}
      </div>
    )
  }
}
export default Header
