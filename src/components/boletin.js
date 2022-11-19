import React from 'react'

import PropTypes from 'prop-types'

import './boletin.css'

const Boletin = (props) => {
  return (
    <div className="boletin-container">
      <span>{props.titulo}</span>
      <h1 className="boletin-text1">{props.id}</h1>
      <span>{props.Platos}</span>
      <span>{props.Mesa}</span>
      <span>{props.Fecha}</span>
      <span>{props.IVA}</span>
      <span>{props.Total}</span>
    </div>
  )
}

Boletin.defaultProps = {
  id: 'd12f2df1fd',
  Fecha: '24/08/2017',
  Total: '7500',
  Platos: 'Porotos Con Rienda',
  Mesa: 'Mesa 25',
  titulo: 'ID de Boleta:',
  IVA: 'IVA 19%',
}

Boletin.propTypes = {
  id: PropTypes.string,
  Fecha: PropTypes.string,
  Total: PropTypes.string,
  Platos: PropTypes.string,
  Mesa: PropTypes.string,
  titulo: PropTypes.string,
  IVA: PropTypes.string,
}

export default Boletin
