import React from 'react'

import { Helmet } from 'react-helmet'

import Botonnormal from './Home/botonnormal'
import Lista from './lista'
import Postres from './Home/postres'
import Plato from './Home/plato'

import './Carrito.css'


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
          <a>
          <Postres 
          rootClassName="postres-root-class-name" 
          image_postres="https://cdn.shopify.com/s/files/1/0492/6711/4133/articles/tiramisu-receta-original.jpg?v=1644419306"
          PrecioPostre="$4000"
          descriptionPostre="Galletas bañadas en Licor y cacao"
          postres="Tiramisu"
          ></Postres>
          <Lista></Lista>
          </a>
          <a>
          <Postres 
          rootClassName="postres-root-class-name" 
          image_postres="https://www.lacocinachilena.tk/wp-content/uploads/2015/05/Brazo-de-reina.jpg"
          PrecioPostre="$4500"
          descriptionPostre="Queque de vainilla, rellenado con manjar y espolvoreado con azúcar con flor"
          postres="Brazo de Reina"
          ></Postres>
          <Lista></Lista>
          </a>
          <a>
          <Plato          
          PrecioPlato="$6500" 
          ProductoPlato="Chaquican"
          description_plato="Charquican con Huevo y Longaniza"
          image_plato="https://recetas-rapidas.es/wp-content/uploads/2018/10/charquican-receta-comida-chile.jpg"
          ></Plato>
          <Lista></Lista>
          </a>
         


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
        <footer className="home-footer">
        <img
          alt="logo"
          src="/playground_assets/image%20%5B1%5D-1500h.png"
          className="home-image"
        />
        <span className="home-text">
          © 2022 E-Restaurant XXI, Todos los derechos reservados.
        </span>
        <div className="home-icon-group">
          <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon2">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="home-icon4">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </footer>





      </div>

  )
}

export default Carrito