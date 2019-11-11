import React from 'react'
import './App.css';
import Header from './client/containers/Header'
import Index from './client/containers/Index'
import drawings from './drawings'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './client/components/CheckoutForm';
import Login from './client/containers/Login'
import dotenv from 'dotenv'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Signup from './client/containers/Signup'

class App extends React.Component {

  state={
    token: null,
    username: '',
    password: '',
    user_id: '',
    user: null,
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

  // need to finish
  addToCart = () => {
    console.log("add to cart method")
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
      console.log(data)
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
        user
      })
    })})
  }

  logOut = () => {
    this.setState({
      user: null,
      token: null,
      username: '',
      password: ''
    })
  }

  render() {
    console.log("id: ", this.state.user_id)
    return (
      <div className="App">
        { this.state.user ?
            <><Header specs={this.state.specs} specsMethod={this.specsMethod} logOut={this.logOut} user={this.state.user}/>
            <Index drawings={this.state.drawings} specs={this.state.specs} specsMethod={this.specsMethod}/></>
          :
          <Switch>
            <Route path='/signup' render={(props) => <Signup />} />
            <Route exact path='/' render={(props) => <Login loginAttempt={this.loginAttempt} fetchUser={this.fetchUser} />} />
          </Switch>
        }
      </div>
    )
  }
}

export default withRouter(App)
