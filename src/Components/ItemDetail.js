import { prettyDOM } from "@testing-library/react"
import ItemCount from "./ItemCount"

export function ItemDetail({product}){
    function OnAddCart(quantity){
        console.log(quantity)
    }
    return(
        <div className="contanier border rounded p-2 d-flex flex-wrap justify-content-center m-2">
            <div className="row pe-5 col-md-6 col-sm-12">
                <img className="rounded" src={product.imgUrl} alt={product.title} />
            </div>
            <div className="col-md-6 col-sm-12 m-0 p-0">
                <div className="p-0 m-0">
                    <h5 className="text-capitalize fw-normal fs_7 fc_grey">{product.id} : {product.categoryId} | <span className="text-black"> {product.title}</span> </h5>
                    <p className="fw-normal fs_7 fc_grey">{product.descripcion}</p>
                    <h5 className="fw-normal fs_7 fc_grey">Unidades Disponibles: {product.stock}</h5>
                    <hr />
                    <h5 className="fw-bold fs_7 text-black">$ {product.precio} USD</h5>
                </div>
                <div className="w-50 mb-2">
                    <select className="form-select">
                        <option value="1">Talla S</option>
                        <option selected value="2">Talla M</option>
                        <option value="3">Talla L</option>
                        <option value="4">Talla XL</option>
                    </select>
                </div>
                <div className="w-50">
                    <ItemCount
                    initialValue={1}
                    maxValue={product.value}
                    onAdd={OnAddCart} />
                </div>
            </div>
        </div>
    )
}