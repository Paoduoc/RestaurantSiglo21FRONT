import React from 'react'

import PropTypes from 'prop-types'

import './Proveedor.css'

const Proveedor = (props) => {
  return (
    <div className={`proveedor-proveedor ${props.rootClassName} `}>
      <div className="proveedor-container">
        <div className="proveedor-container1">
          <div className="proveedor-container2">
            <div className="proveedor-container3">
              <div className="proveedor-container4">
                <h1 className="proveedor-text">{props.NombreProveedor}</h1>
              </div>
              <span className="proveedor-text1">{props.Tipo}</span>
              <span className="proveedor-text2">{props.TipoProv}</span>
            </div>
            <span className="proveedor-text3">{props.Numero}</span>
          </div>
          <span className="proveedor-text4">{props.Num}</span>
        </div>
        <span className="proveedor-text5">{props.Correo}</span>
      </div>
      <div className="proveedor-container5">
        <div className="proveedor-container6"></div>
        <img
          src={props.image_src}
          alt={props.image_alt}
          loading="lazy"
          className="proveedor-image"
        />
      </div>
    </div>
  )
}

Proveedor.defaultProps = {
  NombreProveedor: 'Verduleria Cholito',
  Tipo: 'Tipo de Proveedor :',
  Numero: 'Numero de Contacto :',
  Num: '+56 965423515',
  TipoProv: 'Verduleria',
  Correo: 'maa.salinas@duocuc.cl',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  rootClassName: '',
}

Proveedor.propTypes = {
  NombreProveedor: PropTypes.string,
  Tipo: PropTypes.string,
  Numero: PropTypes.string,
  Num: PropTypes.string,
  TipoProv: PropTypes.string,
  Correo: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Proveedor
