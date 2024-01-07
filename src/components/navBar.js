import React, { Component } from 'react'
import './NavbarStyle.css'
export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar">
        <div className="navbar-container">
          <a href="#" className="navbar-logo">PicsArt</a>
          <ul className="navbar-links">
            <li><a href="#">You</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Prints</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Get Pro</a></li>
            <li>
              <form className="search-form">
                <input type="text" placeholder="Photos, people, or groups" />
              </form>
            </li>
            <li><a href="#">More</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar