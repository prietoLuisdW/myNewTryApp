import { useEffect, useState } from "react"
import { ItemList } from "./ItemList"

import listProducts from "../utilities/products.json"

async function getProducts(){
    const promiseProducts = new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(listProducts)
        }, 2000)
    })
    const products = await promiseProducts
    return products
}

export function ItemListContainer(){
    const [products, setProducts]=useState([])
    useEffect(()=>{
        getProducts().then((products)=>{
            setProducts(products)
        })
    },[])

    return<ItemList className="d-flex row p-5 border" products={products}/>
}