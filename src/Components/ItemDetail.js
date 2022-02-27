export function ItemDetail({product}){
    return(
        <div className="contanier p-2 d-flex flex-wrap flex-sm-column justify-content-around">
            <div clasName="w-50">
                <img src={product.imgUrl} alt={product.title} />
            </div>
            <div className="">
                <h5 className="text-capitalize">{product.id} : {product.categoryId}</h5>
                <h5>{product.title}</h5>
                <h5>{product.stock}</h5>
                <h5>$ {product.precio} USD</h5>
                <p>{product.descripcion}</p>
            </div>
        </div>
    )
}