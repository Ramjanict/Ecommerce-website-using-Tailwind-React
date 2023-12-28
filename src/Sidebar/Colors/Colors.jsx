import React from "react";
import Input from "../../components/Input";

const Colors = ({ radioHandle }) => {
  return (
    <div>
      <h2 className="text-xl my-1">Colors</h2>
      <div className=" text-md">
        <input id="11" type="radio" name="test3" />
        <label className="ml-6" htmlFor="11">
          All
        </label>
        <Input
          radioHandle={radioHandle}
          value="black"
          title="Black"
          name="test3"
        />
        <Input
          radioHandle={radioHandle}
          value="blue"
          title="Blue"
          name="test3"
        />
        <Input radioHandle={radioHandle} value="red" title="Red" name="test3" />
        <Input
          radioHandle={radioHandle}
          value="green"
          title="Geen"
          name="test3"
        />
        <Input
          radioHandle={radioHandle}
          value="white"
          title="White"
          name="test3"
        />
      </div>
    </div>
  );
};

export default Colors;
