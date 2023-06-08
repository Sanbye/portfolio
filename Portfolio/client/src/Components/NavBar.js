import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar =()=>{
    return(
        <>

            <header className="header">
                <div className="navbar-container">
                    <li>
                        <NavLink to="/">About me</NavLink>
                        <NavLink to="/Projects">Projects</NavLink>
                        <NavLink to="/Contact">Contact</NavLink>
                        
                    </li>
                </div>
            </header>

        </>
    )
}

export default NavBar;