import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { SidebarContext } from '../contexts/SidebarContex'

//import cartcontext
import { CartContext } from '../contexts/CartContext'
function Sidebar() {
  const {isOpen,handleClose } = useContext(SidebarContext);
  const {cart, clearCart} = useContext(CartContext)

  return (
    <div className={`${isOpen?'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'> Shopping Bag (0)</div>

        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <span className='text-2xl'>{'->'}</span>
        </div>
      </div>
      <div>
        {cart.map((item)=>{
          return <CartItem item = {item} key={item.it}/>
        })}
      </div>

      <div className=' flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total: </span>
          </div>
          <div onClick={clearCart} className='cursor-pointer text-red-500 py-4 text-lg flex justify-center items-center text-xl'>Clear cart</div>
        </div>
      </div>
    </div>
    
  )
}

export default Sidebar