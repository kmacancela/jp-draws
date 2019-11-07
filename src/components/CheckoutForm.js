import React, {Component} from 'react';
import {CardElement, injectStripe, ReactStripeElements} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: "sk_test_0wG6AUjGDBeOxSfd1zGkGNR100qaQFkyC3"
    });

    if (response.ok) this.setState({complete: true});
  }

  render(){
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (

        <main className="container">
          <form className="form-group mt-3 border border-primary rounded shadow-lg">
            <label>Name</label>
            <input
              type="text"
              className="input-group my-1 p-1 border border-dark"
            />
          </form>
        </main>

      /* {<div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>}*/
    )
  }
}

export default injectStripe(CheckoutForm);
