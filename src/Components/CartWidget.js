import React from 'react'
import cart from '../pictures/cart.svg'
import { Link } from 'react-router-dom'


export function CartWidget ({numOfItems}){
    // const { unidadesSeleccionadas } = useContext(Context)
    return(
        <Link type="Button" to="/cart" className="btn bg-secondary m-0 p-0 color-white ">
            <img src={cart} alt="Logo"/>
            <span className="text-white badge bg-secondary"> {numOfItems}</span>
        </Link>
    )
}