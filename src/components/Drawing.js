import React, {Fragment} from 'react'

class Drawing extends React.Component {

  render(){
    return (
      <Fragment>
        <figure>
            <img src={ this.props.drawing.img } width="200" alt="" />
            <figcaption>{ this.props.drawing.name }</figcaption>
        </figure>
      </Fragment>
    )
  }
}
export default Drawing
