import React from 'react'

function Button({children, type= 'button', bgColor = "bg-blue-600", textColor = "text-white", clasName= '', ...props}) {
  return (
    <button className={`px-4 py-21 rounded-lg ${bgColor} ${textColor} ${clasName}`} {...props}>
        {children}
    </button>
  )
}

export default Button