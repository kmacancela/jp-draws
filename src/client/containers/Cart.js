import React from 'react'
import CartItem from '../components/CartItem'

class Cart extends React.Component {

  render() {
    return(
        <div className="row">
          <div className="column">
            {this.props.cart.map((item, idx) => {
              // console.log(item)
              return (
                /*<div>
                  <img src={item.img} width="100" alt={item.name} />
                  <h2>{item.name}</h2>
                </div>*/
                <CartItem key={idx} item={item} />
              )
            }
          )}
          </div>
          <div className="column">
            Second Blah
          </div>
        </div>
    )
  }
}
export default Cart
