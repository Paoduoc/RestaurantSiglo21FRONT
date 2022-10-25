import React from 'react'

import PropTypes from 'prop-types'

import './botonnormal.css'

const Botonnormal = (props) => {
  return (
    <div className={`botonnormal-container ${props.rootClassName} `}>
      <button className="botonnormal-button button">{props.nombrecito}</button>
    </div>
  )
}

Botonnormal.defaultProps = {
  rootClassName: '',
  nombrecito: 'Ir a',
}

Botonnormal.propTypes = {
  rootClassName: PropTypes.string,
  nombrecito: PropTypes.string,
}

export default Botonnormal
