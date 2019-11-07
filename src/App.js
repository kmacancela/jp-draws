import React from 'react'
import './App.css';
import Header from './containers/Header'
import Index from './containers/Index'
import drawings from './drawings'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './components/CheckoutForm';

function App() {
  return (
    <div className="App">
      <hr />
      <StripeProvider apiKey="pk_test_DL12VnUcqypUKkIt7N1Qn5U400Nn4SZl50">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>

<hr/>
      <Header />
      <Index drawings={ drawings }/>
    </div>
  )
}

export default App
