import React, {Fragment} from 'react'
import Drawing from './Drawing'

class Collection extends React.Component {

  render(){
    return (
      <Fragment>
        { this.props.drawings.map(drawing => {
          return <Drawing drawing={ drawing } specsMethod={ this.props.specsMethod } />
        }) }
      </Fragment>
    )
  }
}
export default Collection
