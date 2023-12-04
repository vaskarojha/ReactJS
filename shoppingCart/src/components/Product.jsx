import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Product({name, price}){
    const {addItem} = useContext(CartContext)

    return < >
        <h1>Product</h1>
        <h2>{name}</h2>
        <h3>{price}</h3>
        <button onClick={()=>addItem(name, price)}>Add to cart</button>
    </>
}

export default Product