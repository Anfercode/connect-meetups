import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png';
import '../assets/styles/components/navbar.sass'


const Navbar = () => {
    return (
        <nav className="navbar" >
            <img src={Logo} alt="" className="navbar-logo" />
            <div className='navbar-buttons' >
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