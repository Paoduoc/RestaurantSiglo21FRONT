import React from 'react'

import { Helmet } from 'react-helmet'

import Botonnormal from '../components/botonnormal'
import Postres from '../components/postres'
import Plato from '../components/plato'
import Bebida from '../components/bebida'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      
      <Helmet>
        <title>E-Restaurant XXI</title>
        <meta property="og:title" content="Travel Agency" />
      </Helmet>
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
              Amet luctus venenatis lectus magna fringilla urna porttitor
              rhoncus dolor. A lacus vestibulum sed arcu non. Dolor magna eget
              est lorem ipsum dolor sit amet consectetur.
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
      <div id="postres" className="home-postres">
        <h1>
          <span>Postres</span>
          
          <br></br>
        </h1>
        <span className="home-text10">Recomendados</span>
        <div className="home-cards-container">
          <Postres rootClassName="postres-root-class-name"></Postres>
          <Postres rootClassName="postres-root-class-name"></Postres>
          <Postres rootClassName="postres-root-class-name"></Postres>
          <Postres rootClassName="postres-root-class-name"></Postres>
          <Postres rootClassName="postres-root-class-name"></Postres>
          <Postres rootClassName="postres-root-class-name"></Postres>
        </div>
      </div>
      <div id="platos" className="home-platos">
        <h1>Platos</h1>
        <span className="home-text12">Recomendados</span>
        <div className="home-cards-container1">
          <Plato PrecioPlato="$5000"></Plato>
          <Plato ProductoPlato="Rome"></Plato>
          <Plato ProductoPlato="Cluj-Napoca"></Plato>
          <Plato ProductoPlato="Paris"></Plato>
          <Plato ProductoPlato="Amsterdam"></Plato>
          <Plato ProductoPlato="Barcelona"></Plato>
        </div>
      </div>
      <div id="bebidas" className="home-bebidas">
        <h1>
          <span>Bebidas</span>
          <br></br>
          <br></br>
        </h1>
        <span className="home-text17">Recomendados</span>
        <div className="home-cards-container2">
          <Bebida
            image=" "
            bebida="Coca cola"
            rootClassName="bebida-root-class-name"
            image_alt_bebida="https://images.unsplash.com/photo-1585211969224-3e992986159d?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            PrecioBebida="$5000"
          ></Bebida>
          <Bebida rootClassName="bebida-root-class-name"></Bebida>
          <Bebida
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAZHlTXLGbv2ZOdnnSdUNABu9R6DfZnSUBg&amp;usqp=CAU"
            rootClassName="bebida-root-class-name"
          ></Bebida>
          <Bebida rootClassName="bebida-root-class-name"></Bebida>
          <Bebida rootClassName="bebida-root-class-name"></Bebida>
          <Bebida rootClassName="bebida-root-class-name"></Bebida>
        </div>
      </div>

      {/* insertar footer */}




    </div>
  )
}

export default Home;
