import React, { Component } from 'react'

class CatCell extends Component {
  render() {
    return (
      <>
        <div class="outer-image">
          <img
            class="image-area"
            src="https://octodex.github.com/images/saritocat.png"
          />
          <section class="caption">
            <p>#114</p>
            <div class="name-pic">
              <p>the Saritocat by</p>
              <img src="https://github.com/JohnCreek.png" />
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default CatCell
