import React from 'react'

import PropTypes from 'prop-types'

import ComprarPulsado from './comprar-pulsado'
import './plato.css'

const Plato = (props) => {
  return (
    <div className="plato-container">
      <img src={props.image_plato} className="plato-image" />
      <div className="plato-container1">
        <span className="plato-text">{props.ProductoPlato}</span>
        <span className="plato-text1">{props.description_plato}</span>
        <span className="plato-text2">{props.PrecioPlato}</span>
        <br></br>
        <ComprarPulsado
          button1="+"
          rootClassName="comprar-pulsado-root-class-name"
          
        ></ComprarPulsado>
      </div>
    </div>
  )
}

Plato.defaultProps = {
  image_plato: 'https://tipsparatuviaje.com/wp-content/uploads/2020/01/comida-chilena.jpg',
  ProductoPlato: 'comida',
  description_plato: '',
  PrecioPlato: '$',
}

Plato.propTypes = {
  image_plato: PropTypes.string,
  ProductoPlato: PropTypes.string,
  description_plato: PropTypes.string,
  PrecioPlato: PropTypes.string,
}

export default Plato
