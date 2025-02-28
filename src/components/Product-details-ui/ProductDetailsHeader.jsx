import React from "react";
import { GoChevronRight } from "react-icons/go";

const ProductDetailsHeader = ({ name, category }) => {
  return (
    <div className="flex gap-5 items-center bg-slate h-15 text-white px-10">
      <h1 className="text-lg font-black tracking-wider hover:underline underline-offset-8 cursor-pointer decoration-1">
        {name}
      </h1>
      <GoChevronRight className="w-6 h-6" />
      <p className="text-sm text-slate bg-gradient-to-b from-orange-200 to-teal-200 py-1 px-4 rounded-2xl">
        {category}
      </p>
    </div>
  );
};

export default ProductDetailsHeader;
