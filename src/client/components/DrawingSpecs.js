import React from 'react'

class DrawingSpecs extends React.Component {

  addToCart = (event) => {
    console.log("this: ", this.props.drawing)
  }

  render() {
    console.log(this.props.drawing.name)
    return (
      <div>
        <div className="row">
          <div className="column">
            <img src={ this.props.drawing.img } width="400" alt="" />
          </div>
          <div className="column">
            <h1>{ this.props.drawing.name }</h1>
            <span>{ this.props.drawing.description }</span>
            <br /><br />
            <button className="purchase-btn" onClick={ this.addToCart }>Add To Cart</button>
          </div>
        </div>
      </div>
    )
  }
}
export default DrawingSpecs
