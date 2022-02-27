import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";

import listProducts from '../utilities/products.json'

async function getProduct(productId){
    const promiseProduct = new Promise((resolve)=>{
        setTimeout(()=>{
            const product = listProducts.find((product)=>product.id===productId)
            resolve(product)
        }, 2000)
    })
    const product = await promiseProduct

    return product
}


export function ItemDetailContainer({productId}){
    const [product, setProduct] = useState()
    useEffect(()=>{
        getProduct(productId).then((product)=>{
        setProduct(product)
    })
    },[productId])
    console.log("Producto Detalle: " + product)
    return product ? <ItemDetail product={product}/> : null
}
