import mas from '../pictures/masCar.svg'
// import ItemCount from "./ItemCount"
export function Item({ product }){
    return(
        <div className="border col-lg-3 col-md-4 col-sm-4 col-mx-6 mx-3 mb-3">
            <div className="card">
                <img src={product.imgUrl} alt={product.title} class="card-img-top"/>
                <a className="position-absolute top-0 end-0" onClick={1}>
                    <img src={mas} alt="masCar"/>
                </a>
                <h5 className="fw-bold fs_7  bg_pink_1 position-absolute bottom-0 start-50 translate-middle-x bg-indigo-300">$ {product.precio} USD</h5>
            </div>
            <div className="border align-items-center">
                <h5 className="fw-normal fs_7 fc_grey text-center align-middle">{product.title}</h5>
            </div>
            
            <button type="button" className="btn btn-dark w-100">Ver Mas</button>
        </div>
    )
}