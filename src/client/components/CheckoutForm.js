import React, {Component} from 'react';
import {CardElement, injectStripe, ReactStripeElements} from 'react-stripe-elements';


class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      name: "",
      amount: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log("handleChange")
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log("reached")
      let { token } = await this.props.stripe.createToken({ name: this.state.name })
      console.log("token: ", token)
      let amount = this.state.amount
      console.log("amount: ", amount)

      // const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = 'http://localhost:9000/charge'

      await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "text/plain"
        },
        body: JSON.stringify({
          // "mode": "no-cors",
          token,
          amount
        })
      })
      // redirect, clear inputs, thank alert
    } catch (event) {
      throw event
    }
  }

  render(){
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <main>
        <form onSubmit={ this.handleSubmit }>
          <label>Name</label>
          <input
            type="text"
            value={ this.state.name }
            name="name"
            onChange={ this.handleChange }
          />
          <label>Amount</label>
          <input
            type="text"
            value={ this.state.amount }
            name="amount"
            onChange={ this.handleChange }
          />
          <CardElement />
          <button>Purchase</button>
        </form>
      </main>
    )
  }
}

export default injectStripe(CheckoutForm);
