import React from 'react'
import { Link } from 'react-router-dom';
function CartItem({item}) {
      // destructuring the item object that has been received
  const {id, title, image, price, amount} = item;
  return (

    <div className='flex'>
      <div className='w-full min-h-[150px] flex items-center gap-x-5'>
    
        <div >
          <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
          </Link>
        </div>
        <div className='flex justify-between mb-2 '>
        <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}</Link>
        </div>
        <div className='bg-blue-300 flex gap-x-2 h-[36px]'>

        </div>
        <div className='cursor-pointer '>
          <span className='text-xl text-red-500'>REMOVE</span>
        </div>
        
      </div>
    </div>
  )
}

export default CartItem