import { useParams } from "react-router-dom";
import {ItemListContainer } from "../Components";

export function CategoryPage(){
    const { categoryId } = useParams()
    return <ItemListContainer query={{categoryId}} />
}