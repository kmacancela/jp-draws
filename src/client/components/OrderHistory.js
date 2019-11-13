import React from 'react'
import Header from '../containers/Header'
import Drawing from './Drawing'

export default class OrderHistory extends React.Component {
  render() {
    return (
      <>
      <Header resetSpecs={this.props.resetSpecs} specs={this.props.specs} specsMethod={this.props.specsMethod} logOut={this.props.logOut} user={this.props.user}/>
      <div>
        {this.props.user.transactions.map((order, idx) => {
        return <Drawing key={idx} drawing={order.drawing} specsMethod={this.props.specsMethod}/>})}
      </div>
      </>
    )
  }
}
