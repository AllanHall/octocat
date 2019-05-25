import React, { Component } from 'react'

class CatCell extends Component {
  render() {
    return (
      <>
        <div className="outer-image">
          <img
            className="image-area"
            src={this.props.firstImage}
            alt="star wars cats"
          />
          <section className="caption">
            <p>{this.props.number}</p>
            <div className="name-pic">
              <p>the {this.props.name} by</p>
              <img src={this.props.secondImage} alt="creator logo" />
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default CatCell
