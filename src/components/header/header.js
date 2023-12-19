import { NavLink } from "react-router-dom"
import logo from "./hamon.jpeg"
import './header.css';


export default function Navbar()
{
    return(
    <nav className="navbar navbar-expand-lg navbar-light"id="mainid">
  <div className="container-fluid">
  <NavLink to={'/'} className="navbar-brand"><img src={logo} height="80" width="120"></img></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink to={'/employees'} className="navbar-brand" id="headerid">Employees</NavLink>
        </li>
        <li className = "nav-item">
        <NavLink to={'/about'}className="navbar-brand" id="headerid">About</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}
