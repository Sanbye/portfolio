import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            <header className="header">
                <div className="navbar-container">
                    <img src={require('../Images/myFace.png')} alt="Le visage de Sylvain Bousquet" className="my-face" />
                    <p>Sylvain Bousquet</p>
                </div>
                <li className="navbar-container">
                    <ul>
                        <NavLink to="/">Accueil</NavLink>
                    </ul>
                    <ul>
                        <NavLink to="/Presentation">Présentation</NavLink>
                    </ul>
                    <ul>
                        <NavLink to="/Projets">Projets</NavLink>
                    </ul>
                    <ul
                        className="nav-dropdown"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <NavLink to="/Competences">Compétences</NavLink>
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <NavLink to="/Competences?type=techniques">Compétences techniques</NavLink>
                                <NavLink to="/Competences?type=humaines">Compétences humaines</NavLink>
                            </div>
                        )}
                    </ul>
                    <ul>
                        <NavLink to="/Contact">Contact</NavLink>
                    </ul>
                </li>
            </header>
        </>
    );
};

export default NavBar;