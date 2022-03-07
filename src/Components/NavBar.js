import React from 'react'
import { Link } from "react-router-dom"
import { CartWidget } from './CartWidget'

export function NavBar() {
    return (
        <div className="navbar navbar-expand-md sticky-top navbar-dark text-white bg-black">
           <div className="container-fluid text-white">
                <Link type="button" className="navbar-brand navbar__brand hover-Black" exact to="/">Evelu</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li  type="button" className="nav-item">
                            <Link className="nav-item nav-link px-4" aria-current="page" to="/" > Home </Link>
                        </li>
                        <li>
                            <Link key="capri" to="/category/capri" className="nav-item nav-link px-4">Capri</Link>
                        </li>
                        <li>
                            <Link key="short" to="/category/short" className="nav-item nav-link px-4">Short</Link>
                        </li>
                        <li>
                            <Link key="cachetero" to="/category/cachetero" className="nav-item nav-link px-4">Cachetero</Link>
                        </li>
                        <li>
                            <Link key="batola" to="/category/batola" className="nav-item nav-link px-4">Batolas</Link>
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