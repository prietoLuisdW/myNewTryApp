import React from 'react'
import cart from '../pictures/cart.svg'
import { Link } from 'react-router-dom'


export function CartWidget ({numeroUnidades}){
    // const { unidadesSeleccionadas } = useContext(Context)
    return(
        <button type="Button" as={Link} to="/cart" className="btn bg-secondary m-0 p-0 color-white ">
            <img src={cart} alt="Logo"/>
            <span className="text-white badge bg-secondary"> {numeroUnidades}</span>
                {/* {
                    unidadesSeleccionadas>0?
                    (
                        <span className="text-white badge bg-secondary"> {unidadesSeleccionadas}</span>
                    )
                    :
                    <></>
                } */}
        </button>
    )
}