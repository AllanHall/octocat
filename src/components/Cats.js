import React, { Component } from 'react'

class Cats extends Component {
  render() {
    return (
      <div className="outer-image">
        <img className="image-area" src={this.props.picUrl} alt="" />
        <section className="caption">
          <p>{this.props.number}</p>
          <div className="name-pic">
            <p>
              the <em>{this.props.name}</em> by
            </p>
            <img src={this.pictureUrl} alt="" />
          </div>
        </section>
      </div>
    )
  }
}

export default Cats
