"use client";

import React from "react";
import Image from "next/image";

import IconButton from "./ui/icon-button";
import Currency from "./ui/currency";


import { Divide, Expand, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className=" cursor-pointer group bg-white rounded-xl border p-3 space-y-4">
      <div className=" aspect-square rounded-xl bg-gray-100 relative">
        <Image
          fill
          src={data?.images?.[0]?.url}
          alt="img"
          className=" aspect-square object-cover rounded-md"
        />
        <div className=" opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className=" flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-neutral-500" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-neutral-500" />}
            />
          </div>
        </div>
      </div>
     {/* Description */}
     <div>
        <p className=" font-semibold text-lg">
          {data.name}
        </p>
        <p className=" text-sm text-gray-500">
          {data.category?.name}
        </p>
     </div>
     {/**Price */}
     <div className=" flex items-center justify-between">
      <Currency value={data?.price} />
     </div>
    </div>
  );
};

export default ProductCard;
