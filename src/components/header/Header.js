import React from 'react'
import Button from '../button/Button';

const Header = (props) => {

  const taskTracker = () => {
    console.log('Goint to task tracker page.');
  }

  return (
    <header>
      <h2>{props.welcomeTitle}</h2>
      <h2>Welcome to {props.focusTitle} Task Tracker</h2>
      <Button bgColor='green' text="Let's go!" onClick={taskTracker}/>
    </header>
  )
}

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
Header.defaultProps = {
  focusTitle: new Date().toLocaleString("en-US", options),
  welcomeTitle: "Hi Seth & Naz!"
}

export default Header
