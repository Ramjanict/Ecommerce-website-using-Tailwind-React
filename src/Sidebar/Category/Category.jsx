import Input from "../../components/Input";

const Category = ({ radioHandle }) => {
  return (
    <div>
      <h2 className="text-xl my-1">Category</h2>
      <div className=" text-md">
        <input
          onChange={radioHandle}
          id="ee"
          type="radio"
          name="test"
          value=""
        />
        <label className="ml-6" htmlFor="ee">
          All
        </label>
        <Input
          radioHandle={radioHandle}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          radioHandle={radioHandle}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          radioHandle={radioHandle}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          radioHandle={radioHandle}
          value="heels"
          title="Seels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
