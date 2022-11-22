import React from 'react'

import './MenuCaja.css'
import {
  Routes,
  Route, 
  NavLink,
  useNavigate
} from "react-router-dom";

const MenuCaja = (props) => {
  return (
    <div className="menu-caja-container">
      <div className="menu-caja-container1">
        <div className="menu-caja-container2">
          <h1 className="menu-caja-text">Caja de Pago</h1>
          <div className="menu-caja-container3">
            <button className="menu-caja-button button" href="/Boletas">
            <NavLink className="nav-link" to="/Boletas"> Historial de Boletas</NavLink>
            </button>
            <button className="menu-caja-button1 button">
                    Generar Pago en Efectivo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuCaja
