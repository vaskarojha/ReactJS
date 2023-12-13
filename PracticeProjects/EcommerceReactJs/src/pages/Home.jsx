import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product'
function Home() {

    //geting product from product context
    const {products}  = useContext(ProductContext)
    // console.log(products)

    // getting proeuct by category
    const filteredProduct = products.filter((item) =>{
        return item.category ==="men's clothing" || item.category ==="women's clothing"
    });
    console.log(filteredProduct)
  return (
    <div>
        <section className='py-16'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1, md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
                    {filteredProduct.map((product)=>{
                        return <Product key={product.id} product = {product}/>;
                    })}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home