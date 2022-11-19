import React from 'react'

import Boletin from './boletin'
import './viewBoletas.css'

const ViewBoletas = (props) => {
  return (
    <div className="view-boletas-container">
      <div className="view-boletas-container1">
        <div className="view-boletas-container2">
          <h1 className="view-boletas-text">Historial de Boletas</h1>
          <div className="view-boletas-container3">
            <Boletin></Boletin>
            <Boletin></Boletin>
          </div>
          <div className="view-boletas-container4"></div>
          <div className="view-boletas-container5"></div>
        </div>
      </div>
    </div>
  )
}

export default ViewBoletas
