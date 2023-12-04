import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){

    const [items, setItems] = useState([]);

    const addItem = (name, price)=>{
        setItems((prevState)=>[...prevState, {name, price}])
    };

    return (
        <CartContext.Provider value={{items, addItem}}>{children}</CartContext.Provider>
    );
}

