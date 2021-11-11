import React from 'react'
import Button from '../button/Button';
import DateTracker from '../date/DateTracker';

const Header = (props) => {

  return (
    <header>
      <h2>{props.welcomeTitle}</h2>
      <DateTracker />
      <Button bgColor={props.showAdd ? 'grey' : 'green'} text={props.showAdd ? 'Close' : 'Add'} onClick={props.onAdd}/>
    </header>
  )
}

Header.defaultProps = {
  welcomeTitle: "Hi Seth & Naz!"
}

export default Header
