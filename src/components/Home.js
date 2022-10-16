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

export default Home;
