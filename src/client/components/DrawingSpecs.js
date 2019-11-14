import React from 'react'
import {NavLink} from 'react-router-dom'

class DrawingSpecs extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="column">
            <img src={ this.props.drawing.img } width="400" alt="" />
          </div>
          <div className="column specs">
            <h2>{ this.props.drawing.name }</h2>
            <h4>${ this.props.drawing.price }</h4>
            <span>{ this.props.drawing.description }</span>
            <br /><br />
            <select>
              <option>Print - Letter Size</option>
              <option>Tote Bag</option>
              <option>Coffee Mug</option>
              <option>Framed</option>
            </select>
            <br /><br />
            <NavLink to="/" onClick={ () => this.props.addToCart(this.props.drawing) } className="btn-item">Add To Cart</NavLink>
          </div>
        </div>
      </div>
    )
  }
}
export default DrawingSpecs
