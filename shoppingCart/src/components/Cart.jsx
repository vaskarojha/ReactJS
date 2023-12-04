import { useContext } from "react";
import React from "react";
import { CartContext } from "../contexts/CartContext";
import Product from "./Product";
function Cart(){
    const {items} = useContext(CartContext)
    return <>
        <h1>Your item list</h1>
        {items.map((item)=>
            ( <Product name = {item.name} price = {item.price} />)
        )}
    </>
}

export default Cart