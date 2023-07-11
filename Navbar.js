import React from 'react'
import logo from "./pics/logo.png";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" to="#"><img className='logo' src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <a className="nav-link hello" aria-current="page" to="#"><Link className='navlist' to='/'>Home</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to=""><Link className='navlist' to='/About'>About</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to=""><Link className='navlist' to='/Order Now'>Order Now</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to=""><Link className='navlist' to='/Contact'>Contact</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to=""><Link className='navlist' to='/Flavours'>Flavours</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
