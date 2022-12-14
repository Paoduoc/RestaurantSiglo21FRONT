import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  Routes,
  Route, 
  NavLink,
  useNavigate
} from "react-router-dom";
import Home from "./Home/Home.js";
import VProveedores from "./vproveedores.js";
import Pagar from "./pagar.js";

import { InternalMenu } from "./InternalMenu";

import Login from "./Login";
import  Tables  from "./Tables/Tables";
import { setUser, setToken, logout } from "../store/slices/userSlice"
import { setPlates } from "../store/slices/cartSlice"
import { UserCrud } from './UserCrud/UserCrud';
import { ProductCrud } from './ProductCrud/ProductCrud';
import { DisheCrud } from './DisheCrud/DisheCrud';
import './Navigation.css'
import { TableCrud } from './TableCrud/TableCrud';
import Carrito from './Carrito.js';
import {Vault} from './Vault/Vault';
import Waiter from './Waiter/Waiter';
import Commands from './Commands/Commands';
import Boletas from './viewBoletas.js';
import Caja from './MenuCaja.js';
import Reporteria from './Reporteria.js';



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
    const cart = localStorage.getItem('cart')
    // lo agregamos al estado global de la app solo si existe en el localstorage
    if (user) {
      dispatch(setUser(JSON.parse(user)))
    }
    // lo mismo con el token
    if (token) {
      dispatch(setToken(JSON.parse(token)))
    }
    if (cart) {
      dispatch(setPlates(JSON.parse(cart)))
    }
  }, [])

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <>
      <div className='background'>
      <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" src=" ">Restaurante XXI</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/internal-menu">Men?? interno</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/pagar"> Ir a Pagar</NavLink>
              </li>
            </ul>
            
          </div>

          {
            !token ?
              <a className="lol" href="/login" role="button">Iniciar sesion</a> :
              (
                <div style={{ color: 'black' }}>
                  <span style={{ 'marginRight': '10px' }}>Bienvenid@ { user?.nombre }</span>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={ () => handleLogout() }
                  >
                    Cerrar sesion
                  </button>
                </div>
              )
          }
        </div>
      </nav>
      </div>
      

      <Routes>
        <Route path="/login" element={ <Login/> } />
        <Route path="/Tables" element={ <Tables/> } />
        <Route path="/internal-menu" element={ <InternalMenu/> } />
        <Route path="/user-crud" element={ <UserCrud/> } />
        <Route path="/product-crud" element={ <ProductCrud/> } />
        <Route path="/dishe-crud" element={ <DisheCrud/> } />
        <Route path="/table-crud" element={ <TableCrud/> } />
        <Route path="/reservation" element={ <Tables/> } />
        <Route path="/vproveedores" element={ <VProveedores/> } />
        <Route path="/pagar" element={ <Pagar/> } />
        <Route path="/commands" element={ 
          <Commands editableStatus={[
            'Pendiente',
            'En preparacion',
          ]}/>
        } />
        <Route path="/carrito" element={ <Carrito/> } />
        <Route path="/" element={ <Home/> } />
        <Route path="/vault" element={ <Vault/> } />
        <Route path="/garzon" element={ 
          <Waiter editableStatus={[
            'Listo para entregar',
            'Entregado',
          ]}/>
        } />
        <Route path="/Boletas" element={ <Boletas/> } />
        <Route path="/MenuCaja" element={ <Caja/> } />
        <Route path="/Reporteria" element={ <Reporteria/> } />
      </Routes>
    </>
  )
}
