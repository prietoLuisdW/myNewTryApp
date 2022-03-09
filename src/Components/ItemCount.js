import React from 'react'
import { useState } from "react"


export function ItemCount({initialValue, minValue = 1 , maxValue, onAdd}){
    const [count, setCount] = useState(initialValue ?? minValue)
    // const [stock, setStock] = useState(stock)
    
    function onIncrement (currentCount){
        return Math.min(maxValue, currentCount+1)
    }

    function onDecrement(currentCount){
        return Math.max(minValue, currentCount-1)
    }

    return(
        <div className='border rounded p-1'>
            <div className="justify-content-between d-flex  align-self-center mb-1">
                <button 
                    className="btn text-white bg_thirt"
                    onClick={()=>setCount(onDecrement)}
                    disabled={count===minValue}
                >
                    -
                </button>
                <span className="fs-6">{count}</span>
                <button 
                    className="text-white btn bg_thirt"
                    onClick={()=>setCount(onIncrement)}
                >
                    +
                </button>
            </div>
            <button type='button' className="btn text-white bg_thirt  w-100 mb-1 fs-6"  onClick={()=>onAdd(count)}>
                {initialValue ? "Actualizar Carrito" : "Agregar Carrito"}
            </button>
        </div>
    )
}

export default ItemCount