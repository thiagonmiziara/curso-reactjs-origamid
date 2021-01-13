import React from "react";
import "./Header.css";
import { NavLink , useLocation} from "react-router-dom";


const Header = () => {
  const location = useLocation();

  React.useEffect(()=>{
    console.log('Mudou a rota');

  },[location])





  return (
    <nav>
      <h1>Esse é o Header</h1>
      <NavLink to="/" end activeStyle={{ backgroundColor: "#ccc" }}>
        Home
      </NavLink>
      |
      <NavLink to="sobre" activeStyle={{ backgroundColor: "#84c" }}>
        Sobre
      </NavLink>
      |
      <NavLink to="login" activeStyle={{ backgroundColor: "#eee" }}>
        Login
      </NavLink>
    </nav>
  );
};

export default Header;
