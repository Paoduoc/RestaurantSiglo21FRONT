import React from 'react'

import PropTypes from 'prop-types'

import ComprarPulsado from './comprar-pulsado'
import './bebida.css'

const Bebida = (props) => {
  return (
    <div className={`bebida-container ${props.rootClassName} `}>
      <img src={props.image_bebida} alt="image" className="bebida-image" />
      <div className="bebida-container1">
        <span className="bebida-text">{props.bebida}</span>
        <span className="bebida-text1">{props.descriptionBebida}</span>
        <span className="bebida-text2">{props.PrecioBebida}</span>
        <ComprarPulsado
          button1="+"
          rootClassName="comprar-pulsado-root-class-name"
          className=""
          
        ></ComprarPulsado>
      </div>
    </div>
  )
}

Bebida.defaultProps = {
  bebida: 'Coca Cola',
  PrecioBebida: '$',
  descriptionBebida:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  rootClassName: '',
  image_bebida: 'https://brindo.cl/3-home_default/1x-coca-cola-lata-350cc.jpg',
}

Bebida.propTypes = {
  bebida: PropTypes.string,
  PrecioBebida: PropTypes.string,
  descriptionBebida: PropTypes.string,
  rootClassName: PropTypes.string,
  image_bebida: PropTypes.string,
}

export default Bebida
