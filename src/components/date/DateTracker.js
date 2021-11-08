import React from 'react'

const DateTracker = (props) => {
  return (
    <>
      <h2>Welcome to {props.dateTitle} Tasks Tracker</h2>
    </>
  )
}

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
DateTracker.defaultProps = {
  dateTitle: new Date().toLocaleString("en-US", options)
}

export default DateTracker
