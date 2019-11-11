import React from 'react'
import './App.css';
import Header from './client/containers/Header'
import Index from './client/containers/Index'
import drawings from './drawings'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './client/components/CheckoutForm';
import Login from './client/containers/Login'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Signup from './client/containers/Signup'

const DEFAULT_STATE = {
  token: null,
  username: '',
  password: '',
  user_id: '',
  user: null,
  drawings: [],
  specs: null,
  cart: []
}

class App extends React.Component {
  state= DEFAULT_STATE

  specsMethod = (drawing) => {
    this.setState({
      specs: drawing
    })
  }

  addToCart = (drawing) => {
    this.setState({
      cart: [...this.state.cart, drawing],
      specs: null
    })
  }

  loginAttempt = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  fetchUser = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(r => r.json())
      .then(data => {
        this.setState({
          token: data.token,
          user_id: data.user_id
        })
      })
      .then(() => {fetch(`http://localhost:3000/users/${this.state.user_id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': this.state.token
        }
      })
      .then(res => res.json())
      .then(user => {
        this.setState({
          user,
          drawings
        })
      })
    })
  }

  logOut = () => {
    this.setState(
      DEFAULT_STATE
    )
  }

  render() {
    return (
      <div className="App">
        { this.state.user ?
            <><Header specs={this.state.specs} specsMethod={this.specsMethod} logOut={this.logOut} user={this.state.user}/>
            <Index drawings={this.state.drawings} specs={this.state.specs} specsMethod={this.specsMethod} addToCart={this.addToCart} cart={this.state.cart}/></>
          :
          <Switch>
            <Route exact path='/signup' render={(props) => <Signup />} />
            <Route exact path='/' render={(props) => <Login loginAttempt={this.loginAttempt} fetchUser={this.fetchUser} />} />
            <Redirect to='' />
          </Switch>
        }
      </div>
    )
  }
}

export default withRouter(App)
