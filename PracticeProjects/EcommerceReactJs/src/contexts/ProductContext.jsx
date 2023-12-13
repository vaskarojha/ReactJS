import React, {createContext, useState , useEffect} from 'react'

//creating context 
export const ProductContext = createContext()

function ProductProvider({children}) {
    //creating a product state to store the products list
    const [products, setProducts] = useState([])

    //fetching the product using api
    useEffect(()=>{
        const fetchProducts = async ()=>{
            const response  = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data)
        } ;
        fetchProducts();
    }, [])
    return (
    <ProductContext.Provider value={{ products }}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider