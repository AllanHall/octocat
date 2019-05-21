import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <nav>
        <img src="./images/logo (1).png" alt="" />
        <div class="top-links">
          <a href="https://suncoast.io/">RSS</a>
          <a href="https://suncoast.io/">FAQ</a>
          <a href="https://suncoast.io/">Back to GitHub</a>
        </div>
      </nav>
    )
  }
}

export default NavBar
