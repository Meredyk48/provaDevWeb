import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
          <h1 className="h1">MyFinance</h1>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/transaction">Transações</Link>
          </nav>
      </header>
    )
}

export default Header;