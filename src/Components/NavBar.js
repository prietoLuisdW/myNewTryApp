import React from 'react'
import { Link } from "react-router-dom"
import { CartWidget } from './CartWidget'

export function NavBar() {
    return (
        <div className="navbar navbar-expand-lg sticky-top navbar-dark text-white bg-black">
           <div className="container-fluid text-white">
                <a className="navbar-brand navbar__brand hover-Black">Evelu</a>
                <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="container">
                        <div as={Link} to="/" > Home </div>
                        <div as={Link} to="/capri" > Capri </div>
                        <div as={Link} to="/short" > Short </div>
                        <div as={Link} to="/cachetero" > Cachetero </div>
                        <div as={Link} to="/variedades" > Variedades </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid d-flex justify-content-end'>
            <CartWidget />
            </div>
        </div>
    )
}

export default NavBar