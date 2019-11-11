import React from 'react'
import './App.css';
import Header from './client/containers/Header'
import Index from './client/containers/Index'
import drawings from './drawings'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './client/components/CheckoutForm';

class App extends React.Component {

  state={
    drawings: [],
    specs: null,
    cart: []
  }

  componentDidMount() {
    this.setState({
      drawings: drawings
    })
  }

  specsMethod = (drawing) => {
    this.setState({
      specs: drawing
    })
  }

  addToCart = () => {
    console.log("add to cart method")
  }

  render() {
    return (
      <div className="App">
        { /* <hr />
        <h1>Testing stripe</h1>
        <StripeProvider apiKey="pk_test_DL12VnUcqypUKkIt7N1Qn5U400Nn4SZl50">
            <Elements>
              <CheckoutForm />
            </Elements>
        </StripeProvider>

        <hr/> */ }

        <Header specs={this.state.specs} specsMethod={this.specsMethod}/>
        <Index drawings={this.state.drawings} specs={this.state.specs} specsMethod={this.specsMethod}/>
      </div>
    )
  }
}

export default App
