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
        <div className='mx-4'>
            <div className="justify-content-between d-flex border align-self-center">
                <button 
                    className="btn btn-secondary"
                    onClick={()=>setCount(onDecrement)}
                    disabled={count===minValue}
                >
                    -
                </button>
                <span className="fs-6">{count}</span>
                <button 
                    className="btn btn-secondary"
                    onClick={()=>setCount(onIncrement)}
                >
                    +
                </button>
            </div>
            <button type='button' className="btn btn-success  w-100 mb-1 fs-6"  onClick={()=>onAdd(count)}>
                Agregar
            </button>
        </div>
    )
}

export default ItemCount