import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


import { Helmet } from 'react-helmet'

import Botonnormal from './botonnormal'
import Plato from './plato'
import Bebida from './bebida'
import './home.css'
import { getMenu } from '../../services/menuService'


const Home = (props) => {

  const staticPlates = [
    {
      _id: 1,
      imagen: 'https://cdn.shopify.com/s/files/1/0492/6711/4133/articles/tiramisu-receta-original.jpg?v=1644419306',
      precio: 4000,
      descripcion: 'Galletas bañadas en Licor y cacao ',
      nombrePlato: "Tiramisu"
    },
    {
      _id: 2,
      imagen: 'https://www.latercera.com/resizer/cJVioFPUTIxZWSwTZIU63KT0UjU=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/HZGWD4HADFG5DABEBJOQCFRDQM.JPG',
      precio: 3000,
      descripcion: 'Pan remojado en Leche y bañado en caramelo',
      nombrePlato: "Colegial"
    },
    {
      _id: 3,
      imagen: 'https://comidaschilenas.com/wp-content/uploads/2019/02/Receta-de-leche-nevadfa-chilena.jpg',
      precio: 4500,
      descripcion: 'Flan de vainilla con azúcar maicena y canela',
      nombrePlato: "Leche Nevada"
    },
    {
      _id: 4,
      imagen: 'https://www.gourmet.cl/wp-content/uploads/2018/03/Leche-Asada-Web.jpg',
      precio: 5000,
      descripcion: 'Leche con huevos, rayadura de limón, azúcar, vainilla y caramelo',
      nombrePlato: "Leche asada"
    },
    {
      _id: 5,
      imagen: 'https://www.lacocinachilena.tk/wp-content/uploads/2015/05/Brazo-de-reina.jpg',
      precio: 4500,
      descripcion: 'Queque de vainilla, rellenado con manjar y espolvoreado con azúcar con flor',
      nombrePlato: "Brazo de Reina"
    },
    {
      _id: 6,
      imagen: 'https://www.diariamenteali.com/medias/Receta-de-Pie-de-lim-n-1900Wx500H?context=bWFzdGVyfHJvb3R8MTY1MTcyfGltYWdlL2pwZWd8aGY3L2gwMC85MDc0MTk1NzkxOTAyL1JlY2V0YS1kZS1QaWUtZGUtbGltw7NuXzE5MDBXeDUwMEh8YjI5NDU4NTNlNjlmNmE2NWQ1MTBhYWYxMjIyNmZjNTM0ZDExNTQyMDY0MWJjZTA2YWY2MzQ4OTRmOTQ0ZDk5OA',
      precio: 4500,
      descripcion: 'Masa de galleta, cubierta por leche condesada con jugo de limón y merengue',
      nombrePlato: "Pie de Limón"
    },
  ]

  const [menu, setMenu] = useState([])

  const handleGetMenu = async () => {
    const response = await getMenu()
    console.log(response)
    if (response.status === 201) {
      setMenu(response.msg)
    }
  }

  useEffect(() => {
    handleGetMenu()
  }, [])

  const handleAddPlate = () => {
    
  }
  
  
  return (
    <div className="home-container">
      
      <Helmet>
        <title>E-Restaurant XXI</title>
        <meta property="og:title" />
      </Helmet>
      <br></br>
      <div className="home-top-container">
        <div className="home-hero">
          <div className="home-content-container">
            <h1 className="home-text">
              <span className="heading home-text01" >Nos Actualizamos </span>
              <br></br>
              <span className="heading home-text01">por ti!</span>
              <br></br>
            </h1>
            <span className="content home-text05">
              Somos conocidos por nuestra exquisita comida casera.
              Ven a disfrutar junto a nosotros una experiencia de sabores.
            </span>
          </div>
          <div className="home-container1">
            <div className="home-container2">
              <a href="#bebidas" className="home-link">
                <Botonnormal
                  rootClassName="botonnormal-root-class-name1"
                  nombrecito="Bebidas"
                  className="home-component"
                ></Botonnormal>
              </a>
              <a href="#platos" className="home-link1">
                <Botonnormal
                  rootClassName="botonnormal-root-class-name2"
                  nombrecito="Platos"
                  className="home-component1"
                ></Botonnormal>
              </a>
              <a href="#postres" className="home-link2">
                <Botonnormal
                  rootClassName="botonnormal-root-class-name"
                  nombrecito="Postres"
                  className="home-component2"
                ></Botonnormal>
              </a>
            </div>
          </div>
        </div>

      </div>
      <br></br>
      <Link className="lel" to="/carrito">Ver Carrito<span></span></Link>

      <div id="postres" className="home-postres">
        <h1>
          <span>Postres</span>
          <br></br>
        </h1>
        <span className="home-text10">Nuestros postres</span>
        <div className="home-cards-container">
          <div></div>
          {
            staticPlates.map(plato => (
              <Plato 
                key={plato._id}
                {...plato}
              />
            ))
          }
        </div>
      </div>
      <div id="platos" className="home-platos">
        <h1>Platos</h1>
        <span className="home-text12">Nuestros platos</span>
        <div className="home-cards-container1">
          {
            menu.map(plato => (
              <Plato 
                key={plato._id}
                {...plato}
              />
            ))
          }
        </div>
      </div>
      <div id="bebidas" className="home-bebidas">
        <h1>
          <span>Bebidas</span>
          <br></br>
          <br></br>
        </h1>
        <span className="home-text17"></span>
        <div className="home-cards-container2">
          <Bebida
            bebida="Coca cola"
            rootClassName="bebida-root-class-name"
            image_bebida="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/02/coca-cola-portada-1877741.jpg"
            PrecioBebida="$2000"
            descriptionBebida="Lata y botella de vidrio retornable"
          ></Bebida>

          <Bebida 
            bebida="Monster"
            rootClassName="bebida-root-class-name"
            image_bebida="https://st.depositphotos.com/9460154/54316/i/600/depositphotos_543162980-stock-photo-black-monster-energy-drink-bryansk.jpg"
            PrecioBebida="$2000"
            descriptionBebida="Variedad de bebida energética Monster. Incluye Monster Zero Sin Azúcar "
          ></Bebida>

          <Bebida 
            bebida="Pepsi"
            rootClassName="bebida-root-class-name"
            image_bebida="https://t3.ftcdn.net/jpg/04/01/01/08/360_F_401010866_2vtyb52QWBQVzdwU3UUBIisSMx1tBM03.jpg"
            PrecioBebida="$1500"
            descriptionBebida="Lata y botella de vidrio retornable"
          ></Bebida>

          <Bebida 
            bebida="Fanta"
            rootClassName="bebida-root-class-name"
            image_bebida="https://c0.wallpaperflare.com/preview/795/164/862/beverage-blur-can-canister.jpg"
            PrecioBebida="$1500"
            descriptionBebida="Lata y botella de vidrio retornable"
          ></Bebida>

          <Bebida bebida="Cerveza"
            rootClassName="bebida-root-class-name"
            image_bebida="https://mejorconsalud.as.com/wp-content/uploads/2016/08/7-increibles-beneficios-de-la-cerveza.jpg"
            PrecioBebida="$2500"
            descriptionBebida="Malta o Lagger en chopero de 700ml"
          ></Bebida>

          <Bebida 
            bebida="Jugo Natural"
            rootClassName="bebida-root-class-name"
            image_bebida="https://s1.1zoom.me/big0/271/Juice_Tomatoes_Kiwi_497425.jpg"
            PrecioBebida="$1500"
            descriptionBebida="Variedad de Jugos. Fresa, Naranja y Durazno."
          ></Bebida>
        </div>
      </div>
    </div>
  )
}

export default Home;
