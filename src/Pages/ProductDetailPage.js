import { useParams } from "react-router-dom";
import { ItemDetailContainer } from "../Components";

export function ProductDetailPage(){
    const { productId } = useParams()
    return <ItemDetailContainer productId={productId} />
}