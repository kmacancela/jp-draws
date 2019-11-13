import React from 'react'
import './App.css';
import HomePage from './client/containers/HomePage'
import DisplayCart from './client/containers/DisplayCart'
import DisplayDrawing from './client/containers/DisplayDrawing'
import drawings from './drawings'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './client/components/CheckoutForm';
import Login from './client/containers/Login'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Signup from './client/containers/Signup'

const DEFAULT_STATE = {
  token: null,
  user_id: null,
  user: null,
  drawings: drawings,
  specs: null,
  cart: []
}

class App extends React.Component {
  state= DEFAULT_STATE

  componentDidMount(){
    let user = JSON.parse(localStorage.getItem('user'))
    if (localStorage.token){
      this.setState({
        token: localStorage.token,
        user_id: localStorage.user_id,
        user
      })
    }
  }

  specsMethod = (drawing) => {
    console.log(drawing)
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

  resetSpecs = () => {
    this.setState({
      specs: null
    })
  }

  // loginAttempt = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  gotToken = (token, user_id) => {
    console.log("logged in", token)
    localStorage.token = token
    localStorage.user_id = user_id
    this.setState({
      token,
      user_id
    })
  }

  fetchUser = (event) => {
    console.log('username: ', event.target.username.value)
    console.log('password: ', event.target.password.value)
    let username = event.target.username.value
    let password = event.target.password.value
    event.preventDefault()
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(r => r.json())
      .then(data => {
        this.gotToken(data.token, data.user_id)
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
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user))
        this.setState({
          user,
          drawings
        })
      })
    })
  }

  logOut = () => {
    localStorage.token = null
    localStorage.user_id = null
    localStorage.user = null
    this.setState(
      DEFAULT_STATE
    )
  }

  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path='/' render={(props) => <HomePage resetSpecs={this.resetSpecs} specs={this.state.specs} specsMethod={this.specsMethod} logOut={this.logOut} user={this.state.user} drawings={this.state.drawings} cart={this.state.cart} addToCart={this.addToCart}/>} />
            <Route path='/cart' render={(props) => <DisplayCart resetSpecs={this.resetSpecs} specs={this.state.specs} specsMethod={this.specsMethod} logOut={this.logOut} user={this.state.user} drawings={this.state.drawings} cart={this.state.cart} addToCart={this.addToCart} />} />
            <Route path='/drawing' render={(props) => <DisplayDrawing resetSpecs={this.resetSpecs} specs={this.state.specs} specsMethod={this.specsMethod} logOut={this.logOut} user={this.state.user} drawings={this.state.drawings} cart={this.state.cart} addToCart={this.addToCart} />} />
            <Route path='/signup' render={(props) => <Signup />} />
            <Route path='/login' render={(props) => <Login loginAttempt={this.loginAttempt} fetchUser={this.fetchUser} />} />
            <Redirect to='' />
          </Switch>

          {
            this.state.user ?
            <Redirect to='' />
            :
            null
          }

          { this.state.specs ?
            <Redirect to='drawing' />
            :
            <Redirect to='' />
           }
      </div>
    )
  }
}

export default withRouter(App)
