import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png';


const Navbar = () => {
    return (
        <nav>
            <img src={Logo} alt="" />
            <div>
                <Link to="/create">
                    <p>Cre tu propia comunidad</p>
                </Link>
                <Link to="/login">
                    <p>Inicia Sesion</p>
                </Link>
                <Link to="/register">
                    <p>Registrate</p>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar