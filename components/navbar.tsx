export const revalidate = 0;
import Link from "next/link";


import Container from "./ui/container";
import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";

import React from "react";
import getCategories from "@/actions/get-categories";



const Navbar = async() => {

   const categories = await getCategories()
  
  return (
    <div className=" border-b-[1px]">
      <Container>
        <div className=" relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className=" ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-2xl font-serif text-red-300">
              trucommerce
            </p>
          </Link>
          <MainNav data={categories}  />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
