import React from 'react'

import Boletin from './boletin'
import './viewBoletas.css'

const ViewBoletas = (props) => {
  return (
    <div className="view-boletas-container">
      <h1>Historial de Boletas</h1>
      <div className="view-boletas-container1">
        <Boletin rootClassName="boletin-root-class-name"></Boletin>
      </div>
    </div>
  )
}

export default ViewBoletas
