import React from 'react'

import PropTypes from 'prop-types'

import './comprar.css'

const Comprar = (props) => {
  return (
    <div className={`comprar-container ${props.rootClassName} `}>
      <button className="comprar-button button">{props.ComprarButton}</button>
    </div>
  )
}

Comprar.defaultProps = {
  rootClassName: '',
  ComprarButton: 'Comprar',
}

Comprar.propTypes = {
  rootClassName: PropTypes.string,
  ComprarButton: PropTypes.string,
}

export default Comprar
