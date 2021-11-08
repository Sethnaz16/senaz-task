import React from 'react'
import Button from '../button/Button';
import DateTracker from '../date/DateTracker';

const Header = (props) => {

  const taskTracker = () => {
    console.log('Goint to task tracker page.');
  }

  return (
    <header>
      <h2>{props.welcomeTitle}</h2>
      <DateTracker />
      <Button bgColor='green' text="Let's go!" onClick={taskTracker}/>
    </header>
  )
}

Header.defaultProps = {
  welcomeTitle: "Hi Seth & Naz!"
}

export default Header
