import React from 'react'

import './pagar.css'

const Pagar = (props) => {
  return (
    <div className="pagar-container">
      <div className="pagar-container1">
        <div className="pagar-container2">
          <h1 className="pagar-text">
            <span>Métodos de Pago</span>
            <br></br>
          </h1>
          <img
            src="https://utilitario.leon.cl/prod/img/web/FormasDePago.png"
            alt="image"
            className="pagar-image"
          />
          <h1 className="pagar-text3">Total de su Compra:</h1>
          <h1>$</h1>
          <button className="pagar-button button">IR A PAGAR</button>
        </div>
      </div>
    </div>
  )
}

export default Pagar
