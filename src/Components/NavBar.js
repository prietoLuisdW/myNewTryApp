import React from 'react'
import { Link } from "react-router-dom"
import { CartWidget } from './CartWidget'

export function NavBar() {
    return (
        <div className="navbar navbar-expand-md sticky-top navbar-dark text-white bg-black">
           <div className="container-fluid text-white">
                <h3 type="button" className="navbar-brand navbar__brand hover-Black"as={Link} to="/">Evelu</h3>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li  type="button" className="nav-item">
                            <div className="nav-item nav-link px-4" aria-current="page" as={Link} to="/" > Home </div>
                        </li>
                        <li type="button" className="nav-item">
                            <div className="nav-link px-4"  aria-current="page"as={Link} to="/capri" > Capri </div>
                        </li>
                        <li type="button" className="nav-item">
                            <div className="nav-link px-4" aria-current="page" as={Link} to="/short" > Short </div>
                        </li>
                        <li type="button" className="nav-item">
                            <div className="nav-link px-4" aria-current="page" as={Link} to="/cachetero" > Cachetero </div>
                        </li>
                        <li type="button" className="nav-item">
                            <div className="nav-link px-4" aria-current="page" as={Link} to="/batolas" > Batolas </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container-fluid d-flex justify-content-end'>
            <CartWidget />
            </div>
        </div>
    )
}

export default NavBar