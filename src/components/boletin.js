import React from 'react'

import PropTypes from 'prop-types'

import './boletin.css'

const Boletin = (props) => {
  return (
    <div className={`boletin-container ${props.rootClassName} `}>
      <div className="boletin-container01">
        <h1 className="boletin-text">{props.boleta}</h1>
        <h1 className="boletin-text01">{props.NroBoleta}</h1>
        <h1 className="boletin-text02">{props.Fecha}</h1>
        <div className="boletin-container02">
          <h1 className="boletin-text03">{props.Grazotitle}</h1>
          <div className="boletin-container03">
            <h1 className="boletin-text04">{props.Garzon}</h1>
          </div>
        </div>
        <div className="boletin-container04"></div>
        <div className="boletin-container05">
          <span className="boletin-text05">{props.CantidadTitle}</span>
          <span className="boletin-text06">{props.ProductoTitle}</span>
          <span className="boletin-text07">{props.PrecioTitle}</span>
        </div>
        <div className="boletin-container06">
          <span className="boletin-text08">{props.Cantidad}</span>
          <span className="boletin-text09">{props.Producto}</span>
          <span className="boletin-text10">{props.Precio}</span>
        </div>
        <div className="boletin-container07">
          <div className="boletin-container08">
            <span className="boletin-text11">
              {props.PropinaSugeridaTitle1}
            </span>
            <span className="boletin-text12">{props.Propina}</span>
          </div>
          <div className="boletin-container09">
            <span className="boletin-text13">{props.SubTotalTitle1}</span>
            <span className="boletin-text14">{props.SubTotal}</span>
          </div>
          <div className="boletin-container10">
            <span className="boletin-text15">{props.TotalTitle}</span>
            <span className="boletin-text16">{props.Total}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Boletin.defaultProps = {
  boleta: 'Boleta',
  NroBoleta: '123456789',
  Fecha: '23-11-2022',
  Garzon: 'Maciel Fuentes',
  Grazotitle: 'Garzon:',
  CantidadTitle: 'Cantidad',
  ProductoTitle: 'Producto',
  PrecioTitle: 'Precio',
  Cantidad: '2',
  Producto: 'Completo',
  Precio: '3000',
  SubTotal: '3000',
  Propina: '300',
  TotalTitle: 'Total',
  Total: '3300',
  SubTotalTitle1: 'SubTotal',
  PropinaSugeridaTitle1: 'Propina Sugerida (10%)',
  rootClassName: '',
}

Boletin.propTypes = {
  boleta: PropTypes.string,
  NroBoleta: PropTypes.string,
  Fecha: PropTypes.string,
  Garzon: PropTypes.string,
  Grazotitle: PropTypes.string,
  CantidadTitle: PropTypes.string,
  ProductoTitle: PropTypes.string,
  PrecioTitle: PropTypes.string,
  Cantidad: PropTypes.string,
  Producto: PropTypes.string,
  Precio: PropTypes.string,
  SubTotal: PropTypes.string,
  Propina: PropTypes.string,
  TotalTitle: PropTypes.string,
  Total: PropTypes.string,
  SubTotalTitle1: PropTypes.string,
  PropinaSugeridaTitle1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Boletin
