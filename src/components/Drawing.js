import React, {Fragment} from 'react'

class Drawing extends React.Component {

  render(){
    return (
      <Fragment>
        <img src={ this.props.drawing.img } width="200" />
      </Fragment>
    )
  }
}
export default Drawing
