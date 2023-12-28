import React from "react";
import Card from "../components/Card";

const Products = ({ result }) => {
  return (
    <div className="grid ml-[15%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[85%]">
      {result}
    </div>
  );
};

export default Products;
