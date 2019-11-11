import React from 'react'
import Collection from '../components/Collection'
import DrawingSpecs from '../components/DrawingSpecs'
import Cart from './Cart'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'

class Index extends React.Component {


  render(){
    return(
      <div className="collection">
        <Switch>
          <Route path={'/cart'} render={(props) => <Cart/>} />
          <Route path={'/drawing'} render={(props) => <DrawingSpecs drawing={ this.props.specs } />} />
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
