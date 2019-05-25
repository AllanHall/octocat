import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="header">
          <div className="top-links">
            <a>RSS</a>
            <a>FAQ</a>
            <a>Back to GitHub</a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav
