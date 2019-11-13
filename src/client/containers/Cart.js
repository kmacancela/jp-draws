import React from 'react'
import CartItem from '../components/CartItem'
import CheckoutForm from '../components/CheckoutForm'
import Login from './Login'
import {StripeProvider, Elements} from 'react-stripe-elements';

class Cart extends React.Component {
  render() {
    return(
        <div className="row">
          <div className="column">
            {this.props.cart.map((item, idx) => {
              return (
                <CartItem key={idx} item={item} />
              )
            }
          )}
          </div>
          <div className="column">
            {this.props.user ?
              <>
                <h2>Cart Total: ${ this.props.totalAmount(this.props.cart) }</h2>
                <StripeProvider apiKey="pk_test_DL12VnUcqypUKkIt7N1Qn5U400Nn4SZl50">
                  <Elements>
                    <CheckoutForm getUser={this.props.getUser} cart={this.props.cart} user={this.props.user} />
                  </Elements>
                </StripeProvider>
              </>
              :
              <Login loginAttempt={this.props.loginAttempt} fetchUser={this.props.fetchUser} />
            }
          </div>
        </div>
    )
  }
}
export default Cart
