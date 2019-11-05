import React from 'react'
import Collection from '../components/Collection'

class Index extends React.Component {
  state={
    drawings: []
  }

  componentDidMount() {
    this.setState({
      drawings: this.props.drawings
    })
  }

  render(){
    return(
      <div>
        <Collection drawings={ this.state.drawings }/>
      </div>
    )
  }
}
export default Index
