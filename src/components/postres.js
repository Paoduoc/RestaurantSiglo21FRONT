import React from 'react'

import PropTypes from 'prop-types'

import ComprarPulsado from './comprar-pulsado'
import './postres.css'

const Postres = (props) => {
  return (
    <div className={`postres-container ${props.rootClassName} `}>
      <img src={props.image_postres} alt="image" className="postres-image" />
      <div className="postres-container1">
        <span className="postres-text">{props.postres}</span>
        <span className="postres-text1">{props.descriptionPostre}</span>
        <span className="postres-text2">{props.PrecioPostre}</span>
        <ComprarPulsado
          button1="Comprar"
          rootClassName="comprar-pulsado-root-class-name"
          className=""
        ></ComprarPulsado>
      </div>
    </div>
  )
}

Postres.defaultProps = {
  rootClassName: '',
  image_postres: 'https://play.teleporthq.io/static/svg/default-img.svg',
  postres: 'Tiramisu',
  descriptionPostre:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  PrecioPostre: '$',
}

Postres.propTypes = {
  rootClassName: PropTypes.string,
  image_postres: PropTypes.string,
  postres: PropTypes.string,
  descriptionPostre: PropTypes.string,
  PrecioPostre: PropTypes.string,
}

export default Postres
