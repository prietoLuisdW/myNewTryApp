import { Item } from "./Item"
//Lista y renderiza los productos

export function ItemList({products}){
    return(
        <div className="contanier border p-2 d-flex flex-wrap justify-content-around">
            {products.map((product)=>{
                return( <Item key={product.id} product={product}/> )
            })}
        </div>
    )
}
