import Link from 'next/link'

import Container from './ui/container'
import MainNav from './main-nav'

import React from 'react'

const Navbar = () => {
  return (
    <div className=' border-b-[1px]'>
        <Container>
            <Link href="/" className=' ml-4 px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
              <p className="font-bold text-2xl font-serif text-red-300">trucommerce</p>
            </Link>
            <MainNav />
        </Container>
       
    </div>
  )
}

export default Navbar