import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar =()=>{
    return(
        <>

            <header className="header">
                <div className="navbar-container">
                    <li>
                        <NavLink to="/">About me</NavLink>
                        <NavLink to="/projets">Projets</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        
                    </li>
                </div>
            </header>

        </>
    )
}

export default NavBar;