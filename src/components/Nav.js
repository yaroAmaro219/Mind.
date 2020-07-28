import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div class='nav'>
        <h1 class='title'>Mind</h1>
        <svg class='rect' width="8" height="8" viewBox="40 40 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect  width="80" height="80" fill="#43FE16"/>
</svg>
        {/* <h1 class='title-period'>.</h1> */}
        <a class='nav-link' href='#corporate'>Corporate Sessions</a>
        <a class='nav-link' href='#private'>Private Sessions</a>
        <a class='nav-link' href='#training'>
          Online Meditation Training
        </a>
        <a class='nav-link' href='#why'>Why Meditate?</a>
        <a class='nav-link' href='#about'>About Us</a>
      </div>
    )
  }
}
