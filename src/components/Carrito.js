import React from 'react'

import { Helmet } from 'react-helmet'

import Botonnormal from './botonnormal'
import Postres from './postres'
import Plato from './plato'
import Bebida from './bebida'
import './Carrito.css'
import ComprarPulsado from './comprar-pulsado'

const Carrito = (props) => {
  return (
    <div className="carrito-container">
      <Helmet>
      </Helmet>
      <main className="carrito-main">
        <div className="carrito-speakers section-container">
          <div className="carrito-max-width max-content-container">
            <h1 className="carrito-text">Pedidos en Carro: </h1>
          </div>
        </div>
      </main>
      <div className="carrito-container1">

        <div className="home-cards-container">
          <Postres 
          rootClassName="postres-root-class-name" 
          image_postres="https://cdn.shopify.com/s/files/1/0492/6711/4133/articles/tiramisu-receta-original.jpg?v=1644419306"
          PrecioPostre="$4000"
          descriptionPostre="Galletas bañadas en Licor y cacao"
          postres="Tiramisu"
          ></Postres>
          <Postres 
          rootClassName="postres-root-class-name" 
          image_postres="https://www.lacocinachilena.tk/wp-content/uploads/2015/05/Brazo-de-reina.jpg"
          PrecioPostre="4500"
          descriptionPostre="Queque de vainilla, rellenado con manjar y espolvoreado con azucar con flor"
          postres="Brazo de Reina"
          ></Postres>
                    <Plato          
          PrecioPlato="$6500" 
          ProductoPlato="Chaquican"
          description_plato="Charquican con Huevo y Longaniza"
          image_plato="https://recetas-rapidas.es/wp-content/uploads/2018/10/charquican-receta-comida-chile.jpg"
          ></Plato>
         


         <div>

         <h4 className='total' >Total:</h4>
         </div>
          
          
         <Botonnormal
                  rootClassName="botonnormal-root-class-name"
                  nombrecito="Solicitar Pedido"
                  className="home-component2"
                ></Botonnormal>
    </div>
        </div>
        




      </div>

  )
}

export default Carrito