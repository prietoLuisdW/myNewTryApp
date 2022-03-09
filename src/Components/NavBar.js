import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from './CartWidget'

export function NavBar() {
    return (
        <div className="navbar navbar-expand-md sticky-top navbar-dark text-white bg_brand">
           <div className="container-fluid text-white">
                <Link type="button" className="navbar-brand link_one" exact to="/">Evelu</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li  type="button" className="nav-item  d-flex align-items-center">
                            <Link className="nav-item px-4 nav-link " aria-current="page" to="/" > Home </Link>
                        </li>
                        <li className='d-flex align-items-center'>
                            <Link key="capri" to="/category/capri" className="nav-item px-4 nav-link">Capri</Link>
                        </li>
                        <li className='d-flex align-items-center'>
                            <Link key="short" to="/category/short" className="nav-item px-4 nav-link">Short</Link>
                        </li>
                        <li className='d-flex align-items-center'>
                            <Link key="cachetero" to="/category/cachetero" className="nav-item px-4 nav-link">Cachetero</Link>
                        </li>
                        <li className='d-flex align-items-center'>
                            <NavLink key="batola" to="/category/batola" className="nav-item px-4 nav-link ">Batolas</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container-fluid d-flex justify-content-end'>
            <CartWidget numOfItems={4}/>
            </div>
        </div>
    )
}

export default NavBar