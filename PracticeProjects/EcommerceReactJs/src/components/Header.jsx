import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContex'
function Header() {
  const {isOpen, setIsOpen} = useContext(SidebarContext);

  return (
    <>
    <div className='bg-blue-300'>
    <div>Header</div>
    <div onClick={()=>setIsOpen(!isOpen)}>open/close</div>
    </div>
    </>
  )
}

export default Header