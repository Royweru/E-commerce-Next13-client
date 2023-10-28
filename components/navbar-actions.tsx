import React from 'react'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'

const NavbarActions = () => {
  return (
    <div className=' ml-auto flex items-center gap-x-4'>
        <Button
         className=' w-auto rounded-full bg-black border-transparent px-5 
         py-3 text-white font-semibold'
         variant="cart"
         >
           <ShoppingBag size={20} color='white' />
           <span className=' ml-2 text-sm font-medium text-white'>
            0
           </span>
        </Button>
    </div>
  )
}

export default NavbarActions