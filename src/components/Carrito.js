import React from 'react'

import { Helmet } from 'react-helmet'

import Botonnormal from './Home/botonnormal'
import Plato from './Home/plato'

import './Carrito.css'
import { useSelector } from 'react-redux'


const Carrito = (props) => {

  const { plates } = useSelector((state) => state.cart)

  return (
    <div className="carrito-container">
      <main className="carrito-main">
        <div className="carrito-speakers section-container">
          <div className="carrito-max-width max-content-container">
            <h1 className="carrito-text">{plates.length  ? 'Pedidos en Carro:' : 'No tienes platos seleccionados para el carrito'}</h1>
          </div>
        </div>
      </main>
      {
        plates.length
        ? (
          <div className="carrito-container1">
            <div className="home-cards-container">
              {
                plates.map(plato => (
                  <Plato
                    rootClassName="postres-root-class-name"
                    key={plato._id}
                    {...plato}
                  />

                ))
              }
            </div>
            <div className='total'>
              <div>
                <h4>Total: ${plates.reduce((previousValue, currentValue) => previousValue + currentValue.precio * currentValue.cantidad, 0)}</h4>
              </div>
              <Botonnormal
                rootClassName="botonnormal-root-class-name"
                nombrecito="Solicitar Pedido"
                className="home-component2"
              ></Botonnormal>
            </div>
          </div>
        ) : <></>
      }
    </div>

  )
}

export default Carrito