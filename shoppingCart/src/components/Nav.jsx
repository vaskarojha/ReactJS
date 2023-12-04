import React from "react";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import {CartContext} from '../contexts/CartContext'

function Nav(){
    const {items} = useContext(CartContext)
    return <>
        <h1>Navbar</h1> <span>Cart: {items.length} <br /></span>
        <Link to={'/'}>Home</Link> { "  | "}
        <Link to={"/cart"}>Cart</Link>
    </>
}

export default Nav