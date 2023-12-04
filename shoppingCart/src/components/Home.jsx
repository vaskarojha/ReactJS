import React from "react";
import Product from "./Product";


const products =[{
    name: "p1",
    price: 100
},
{
    name: "p2",
    price: 200
}]

function Home(){
    return <>
        <h1>Home</h1>
        {products.map((product)=>
            ( <Product name = {product.name} price = {product.price} />)
        )}
    </>
}

export default Home