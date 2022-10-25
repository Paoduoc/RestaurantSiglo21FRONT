import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  Routes,
  Route, 
  NavLink,
  useNavigate
} from "react-router-dom";
import Home from "./Home/Home.js";
import Tomar from "./Tomar";
import Carrito from "./Carrito.js";
import { InternalMenu } from "./InternalMenu";

import Login from "./Login";
import  Tables  from "./Tables/Tables";
import { setUser, setToken, logout } from "../store/slices/userSlice"
import { UserCrud } from './UserCrud/UserCrud';
import { ProductCrud } from './ProductCrud/ProductCrud';
import { DisheCrud } from './DisheCrud/DisheCrud';
import './Navigation.css'
import { TableCrud } from './TableCrud/TableCrud';
import { Vault } from './Vault/Vault.js';

export const Navigation = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, token } = useSelector((state) => state.user)
  
  // aqui obtenemos el token y los datos del usuario que se encuentra almacenado en el localstorage
  useEffect(() => {
    // obtenemos el usuario
    const user = localStorage.getItem('user')
    // obtenemos el token
    const token = localStorage.getItem('token')
    // lo agregamos al estado global de la app solo si existe en el localstorage
    if (user) {
      dispatch(setUser(JSON.parse(user)))
    }
    // lo mismo con el token
    if (token) {
      dispatch(setToken(JSON.parse(token)))
    }
  }, [])

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Restaurante XXI</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/internal-menu">Menú</NavLink>
              </li>
              
            </ul>
          </div>

          {
            !token ?
              <a className="lol" href="/login" role="button">Iniciar sesión</a> :
              (
                <div style={{ color: 'black' }}>
                  <span style={{ 'marginRight': '10px' }}>Bienvenid@ { user?.nombre }</span>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={ () => handleLogout() }
                  >
                    Cerrar sesión
                  </button>
                </div>
              )
          }
        </div>
      </nav>

      <Routes>
        <Route path="/login" element={ <Login/> } />
        <Route path="/Tables" element={ <Tables/> } />
        <Route path="/internal-menu" element={ <InternalMenu/> } />
        <Route path="/user-crud" element={ <UserCrud/> } />
        <Route path="/product-crud" element={ <ProductCrud/> } />
        <Route path="/dishe-crud" element={ <DisheCrud/> } />
        <Route path="/table-crud" element={ <TableCrud/> } />
        <Route path="/reservation" element={ <Tables/> } />
        <Route path="/carrito" element={ <Carrito/> } />
        <Route path="/Tomar" element={ <Tomar/> } />
        <Route path="/" element={ <Home/> } />
        <Route path="/vault" element={ <Vault/> } />
      </Routes>
    </>
  )
}
