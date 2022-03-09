import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

export function UseCart(){
    return useContext(CartContext)
}