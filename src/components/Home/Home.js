import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


import { Helmet } from 'react-helmet'

import Botonnormal from './botonnormal'
import Plato from './plato'
import './home.css'
import { getMenu } from '../../services/menuService'
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../../store/slices/cartSlice';


const Home = (props) => {
  const { plates, menu } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleGetMenu = async () => {
    const response = await getMenu()
    if (response.status === 201) {
      dispatch(setMenu(response.msg))
    }
  }

  useEffect(() => {
    handleGetMenu()
  }, [])
  
  
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
              <span className="heading home-text01">por tí!</span>
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

      <div id="platos" className="home-platos">
        <h1>Menú</h1>
        <span className="home-text12">Nuestro menú</span>
        <div className="home-cards-container1">
          {
            menu.map(plato => (
              <Plato 
                key={plato._id}
                {
                  ...plato
                }
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home;
