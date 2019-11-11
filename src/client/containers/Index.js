import React from 'react'
import Collection from '../components/Collection'
import DrawingSpecs from '../components/DrawingSpecs'
import Cart from './Cart'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'

class Index extends React.Component {


  render(){
    // console.log(this.props.specsMethod)
    return(
      <div className="collection">
        <Switch>
          <Route path={'/cart'} render={(props) => <Cart cart={this.props.cart}/>} />
          <Route path={'/drawing'} render={(props) => <DrawingSpecs drawing={ this.props.specs } addToCart={this.props.addToCart} />} />
          <Route path={'/'} render={(props) => <Collection drawings={ this.props.drawings } specsMethod={ this.props.specsMethod } />} />
        </Switch>

        { this.props.specs ?
          <Redirect to='drawing' />
          :
          <Redirect to='' />
         }


      </div>
    )
  }
}
export default withRouter(Index)
