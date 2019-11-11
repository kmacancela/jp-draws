import React from 'react'
import {NavLink} from 'react-router-dom'

class Header extends React.Component {

  changeSpecs = () => {
    this.props.specsMethod(null)
  }

  render(){
    return(
      <div className="App-header">
        <div className="cart">
          <NavLink to='/cart' activeClassName='cart-checkout' activeStyle={{}}>Cart</NavLink>
        </div>
        <span className="headerText"><NavLink onClick={this.changeSpecs} to='/' activeClassName='homepage' activeStyle={{}}>JP Chigne Draws</NavLink></span>
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
