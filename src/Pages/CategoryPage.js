import { useParams } from "react-router-dom";
import { ItemDetailContainer } from "../Components";

export function CategoryPage(){
    const { categoryId } = useParams()
    return <ItemDetailContainer query={{categoryId}} />
}