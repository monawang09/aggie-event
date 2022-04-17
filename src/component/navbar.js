import "./navbar.css";
import {NavLink,Nav,NavMenu} from "./Navbar.style.js"
import logo from './images/ucdavis_logo_gold.svg'; 

function Navbar() {
  return (
    <>
    <div>
        <img src={logo} className='davislogo' />
    </div>
    <Nav>
      <NavMenu>
        <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="/events" >
          Events
        </NavLink>
        <NavLink to="/calendar" >
          Calendar
        </NavLink>
        <NavLink to="/connect" >
            Connect
        </NavLink>
      </NavMenu>
    </Nav>
    <div className="LoginInfo"> Hi,Tiffany!</div>
    <div className="Logout">Logout</div>
  </>
  );
}

export default Navbar;
