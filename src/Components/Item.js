import { Link } from "react-router-dom"
import mas from '../pictures/masCar.svg'
// import ItemCount from "./ItemCount"
export function Item({ product }){
    return(
        <div className="col-lg-3 col-md-4 col-sm-4 col-mx-6 mx-3 mb-3">
            <div className="card">
                <img src={product.imgUrl} alt={product.title} className="card-img-top"/>
                <div type="button" as={Link} to= "/cart" className="position-absolute top-0 end-0 scale_1">
                    <img src={mas} alt="masCar"/>
                </div>
                <h5 className="fw-bold fs_7  bg_pink_1 position-absolute bottom-0 start-50 translate-middle-x bg-indigo-300">$ {product.precio} USD</h5>
            </div>
            <div className="align-items-center">
                <h5 className="fw-normal fs_7 fc_grey text-center align-middle">{product.id}: {product.title}</h5>
            </div>
            
            <Link 
                type="button" className="btn text-white bg_thirt w-100"
                key={product.id} to={`/product/${product.id}`}>
            Ver Mas
            </Link>
        </div>
    )
}