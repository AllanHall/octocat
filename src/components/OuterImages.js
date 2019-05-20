import React, { Component } from 'react'

class OuterImages extends Component {
  render() {
    return (
      <div class="outer-image">
        <img class="image-area" src="https://octodex.github.com/images/octobiwan.jpg" />
        <section class="caption">
          <p>#3</p>
          <div class="name-pic">
            <p>the <em>Octobi Wan Catnobi</em> by</p>
            <img src="https://github.com/cameronmcefee.png" />
          </div>
        </section>
      </div>
    )
  }
}

export default OuterImages
