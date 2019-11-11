import React, {Fragment} from 'react'

class CartItem extends React.Component {

  render(){
    return (
      <Fragment>
        <figure>
            <img src={ this.props.item.img } width="100" alt="" />
            <figcaption>{ this.props.item.name }</figcaption>
        </figure>
      </Fragment>
    )
  }
}
export default CartItem
