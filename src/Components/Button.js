
import PropTypes from 'prop-types'
import React from 'react'

const Button = ({color, text, onClick}) => {
  
    return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}</button>
    </div>
  )
}

Button.defaultProps = {
    color: 'stealblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
