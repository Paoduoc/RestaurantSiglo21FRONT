import React from 'react'

import PropTypes from 'prop-types'

import './comprar-pulsado.css'

const ComprarPulsado = (props) => {
  return (
    <div className={`comprar-pulsado-container ${props.rootClassName} `}>
      <button className="comprar-pulsado-button button">{props.button1}</button>
    </div>
  )
}

ComprarPulsado.defaultProps = {
  rootClassName: '',
  button1: 'Comprar',
}

ComprarPulsado.propTypes = {
  rootClassName: PropTypes.string,
  button1: PropTypes.string,
}

export default ComprarPulsado
