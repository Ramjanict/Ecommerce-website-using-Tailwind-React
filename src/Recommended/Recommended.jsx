import React from "react";
import Button from "../components/Button";

const Recommended = ({ buttonHandle }) => {
  return (
    <>
      <h1 className="font-semibold text-2xl font-sans text-center my-4">
        Recommended
      </h1>
      <div className="flex gap-x-2 text-[#323232] justify-center">
        <Button onClickHandler={buttonHandle} value="" title="All Products" />
        <Button buttonHandle={buttonHandle} value="Puma" title="Puma" />
        <Button buttonHandle={buttonHandle} value="Nike" title="Nike" />
        <Button buttonHandle={buttonHandle} value="Adidas" title="Adidas" />
        <Button buttonHandle={buttonHandle} value="Vans" title="Vans" />
      </div>
    </>
  );
};

export default Recommended;
