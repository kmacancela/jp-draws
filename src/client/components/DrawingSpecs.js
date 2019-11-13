import React from 'react'
import {NavLink} from 'react-router-dom'

class DrawingSpecs extends React.Component {

  render() {
    // console.log(this.props.drawing.name)
    return (
      <div>
        <div className="row">
          <div className="column">
            <img src={ this.props.drawing.img } width="400" alt="" />
          </div>
          <div className="column">
            <h1>{ this.props.drawing.name }</h1>
            <h2>Price: ${ this.props.drawing.price }</h2>
            <span>{ this.props.drawing.description }</span>
            <br /><br />
            <NavLink to="/" onClick={ () => this.props.addToCart(this.props.drawing) } >Add To Cart</NavLink>
            { /* <button className="purchase-btn" onClick={ () => this.props.addToCart(this.props.drawing) }>Add To Cart</button> */ }
          </div>
        </div>
      </div>
    )
  }
}
export default DrawingSpecs
