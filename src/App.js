import React from 'react'
import './App.css';
import HomePage from './client/containers/HomePage'
import DisplayCart from './client/containers/DisplayCart'
import DisplayDrawing from './client/containers/DisplayDrawing'
import drawings from './drawings'
import Login from './client/containers/Login'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Signup from './client/containers/Signup'
import OrderHistory from './client/components/OrderHistory'

const DEFAULT_STATE = {
  token: null,
  user_id: '',
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

  getToken = (event) => {
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value
      })
    })
      .then(r => r.json())
      .then(data => {
        localStorage.token = data.token
        localStorage.user_id = data.user_id
        this.setState({
          token: data.token,
          user_id: data.user_id
        })
      })
  }

  totalAmount = () => {
    console.log("hits")
    // let total = this.state.cart.reduce((a,b) => {
    //   console.log("a", a, "b", b)
    //   return a.price + b.price, 0
    // })
    // console.log("total", total)
    return this.state.cart[0].price
  }

  getUser = () => {
    return fetch(`http://localhost:3000/users/${this.state.user_id}`, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': this.state.token
      }
    })
    .then(res => res.json())
    .then(user => {
      localStorage.setItem('user', JSON.stringify(user))
      this.setState({
        user,
        drawings
      })
    })
  }

  fetchUser = (event) => {
    event.preventDefault()
    this.getToken(event)
      .then(() => {
        this.getUser()
    })
  }

  newUser = (event) => {
    let username = event.target.username.value
    let password = event.target.password.value
    return fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        first_name: event.target.first_name.value,
        last_name:event.target.last_name.value,
        username,
        password
      })
    })
    .then(r => r.json())
    .then(data => {
      this.setState({
        username,
        password
      })
      console.log(data, "data")
      this.fetchUser(event)
    })
  }

  createUser = (event) => {
    event.preventDefault()
    this.newUser(event)
    .then(
    this.getToken())
      .then(() => {
        this.getUser()
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
            <Route path='/cart' render={(props) => <DisplayCart resetSpecs={this.resetSpecs} specs={this.state.specs} specsMethod={this.specsMethod} logOut={this.logOut} user={this.state.user} drawings={this.state.drawings} cart={this.state.cart} addToCart={this.addToCart} loginAttempt={this.loginAttempt} fetchUser={this.fetchUser} totalAmount={this.totalAmount} />} />
            <Route path='/drawing' render={(props) => <DisplayDrawing resetSpecs={this.resetSpecs} specs={this.state.specs} specsMethod={this.specsMethod} logOut={this.logOut} user={this.state.user} drawings={this.state.drawings} cart={this.state.cart} addToCart={this.addToCart} />} />
            <Route path='/signup' render={(props) => <Signup createUser={ this.createUser }/>} />
            <Route path='/login' render={(props) => <Login loginAttempt={this.loginAttempt} fetchUser={this.fetchUser} />} />
            <Route path='/orderhistory' render={(props) => <OrderHistory resetSpecs={this.resetSpecs} specs={this.state.specs} specsMethod={this.specsMethod} logOut={this.logOut} user={this.state.user} drawings={this.state.drawings} cart={this.state.cart} addToCart={this.addToCart}/>} />} />
            <Redirect to='' />
          </Switch>



           {this.state.user ?
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
