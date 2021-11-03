import React from 'react'

const Header = (props) => {

  return (
    <header>
      <h2>{props.welcomeTitle}</h2>
      <h2>Welcome to {props.focusTitle} Task Tracker</h2>
    </header>
  )
}

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
Header.defaultProps = {
  focusTitle: new Date().toLocaleString("en-US", options),
  welcomeTitle: "Hi Seth & Naz!"
}

export default Header
