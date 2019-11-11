import React, {Fragment} from 'react'

class Drawing extends React.Component {

  handleClick = (event) => {
    this.props.specsMethod(this.props.drawing)
  }

  render(){
    // console.log(this.props.specsMethod)

    return (
      <Fragment>
        <figure onClick={ this.handleClick }>
            <img src={ this.props.drawing.img } width="200" alt="" />
            <figcaption>{ this.props.drawing.name }</figcaption>
        </figure>
      </Fragment>
    )
  }
}
export default Drawing
