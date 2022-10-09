import {
  Routes,
  Route, 
  NavLink
} from "react-router-dom";
import { Home } from "./Home";
import { InternalMenu } from "./InternalMenu";

import Login from "./Login";
import { Marco } from "./Marco/Marco";
// import { Menu } from "./Menu";

export const Navigation = () => {
  return (
    <div className="h-100">
      <div className="col">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Restaurante XXI</a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/menu">Menu</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/marco">Marco</NavLink>
                </li>
              </ul>
            </div>
            <a className="btn btn-outline-success" href="/login" role="button">Iniciar sesion</a>
          </div>
        </nav>

        <Routes>
          <Route path="/login" element={ <Login/> } />
          <Route path="/menu" element={ <Login/> } />
          <Route path="/marco" element={ <Marco/> } />
          <Route path="/internal-menu" element={ <InternalMenu/> } />
          <Route path="/" element={ <Home/> } />
        </Routes>
      </div>
    </div>
  )
}
