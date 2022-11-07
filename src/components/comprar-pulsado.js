import React from 'react'

import PropTypes from 'prop-types'

import './comprar-pulsado.css'

const ComprarPulsado = (props) => {
  return (
    <div className={`comprar-pulsado-container ${props.rootClassName} `}>
      <button className="comprar-pulsado-button button">{props.button1} <img src={props.icono} className="icono"/> </button> 
    </div>
  )
}

ComprarPulsado.defaultProps = {
  rootClassName: '',
  button1: 'Comprar',
  icono: 'https://cdn-icons-png.flaticon.com/512/4175/4175270.png'
}

ComprarPulsado.propTypes = {
  rootClassName: PropTypes.string,
  button1: PropTypes.string,
  icono: PropTypes.string
}

export default ComprarPulsado
