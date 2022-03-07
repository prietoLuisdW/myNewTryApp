import { useEffect, useState } from "react"
import { ItemList } from "./ItemList"

import listProducts from "../utilities/products.json"

async function getProducts(query){
    const promiseProducts = new Promise ((resolve)=>{
        setTimeout(()=>{
            let findProducts = listProducts
            
            if(query?.categoryId){
                findProducts = listProducts.filter(
                    (product) => product.categoryId===query.categoryId
                )
            }

            resolve(findProducts)
        }, 2000)
    })
    const products = await promiseProducts
    return products
}

export function ItemListContainer({query}){
    const [products, setProducts]=useState([])
    useEffect(()=>{
        getProducts().then((products)=>{
            setProducts(products)
        })
    },[query])

    console.log("All Products: " + products)

    return(
        <div>
            <ItemList className="d-flex row p-5 border" products={products}/>
        </div>
    )
}