"use client";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import usePersistedCart from "@/hooks/use-cart";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className=" bg-slate-100 min-h-screen p-3 rounded-lg">
      <Container>
        <div className=" py-16 px-4 sm:px-6 lg:px-8">
        <h1 className=" text-3xl font-bold text-rose-300 font-serif underline">
          Shopping Cart
        </h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
