import React from 'react'
import { useState } from "react"


export function ItemCount(props){
    const [unidades, setUnidades] = useState(1)
    const [stock, setStock] = useState(props.stock)
        

    return(
        <>
            <div className="justify-content-between d-flex border align-self-center">
                <button 
                    className="btn btn-secondary"
                    onClick={()=>
                    {if ( unidades<=0){
                        setUnidades(unidades)
                    }else{
                        setUnidades(unidades - 1)
                        setStock(stock+1)}
                    }
                }>
                    -
                </button>
                <span className="fs-6">{unidades}</span>
                <button 
                    className="btn btn-secondary"
                    onClick={()=>
                        {if ( stock<=0){
                                setUnidades(unidades)
                                setStock(stock=0)
                            }else{
                                setUnidades(unidades+1)
                                setStock(stock-1)
                        }
                    }
                            
                    }>
                    +
                </button>
            </div>
            <button type='button' className="btn btn-success  w-100 mb-1 fs-6"  onClick={()=>props.onAdd({unidades})}>
                Agregar
            </button>
        </>
    )
}

export default ItemCount