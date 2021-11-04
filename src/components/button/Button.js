import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => {

  return (
    <button 
    onClick={props.onClick}
    className="btn" 
    style={{ backgroundColor: props.bgColor }}
    >
    { props.text }
    </button>
  )
}

Button.defaultProps = {
  bgColor: 'grey',
  text: 'Click here'
}

Button.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  taskTracker: PropTypes.func
}

export default Button
