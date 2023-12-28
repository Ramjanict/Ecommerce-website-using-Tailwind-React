import Input from "../../components/Input";

const Price = ({ radioHandle }) => {
  return (
    <div>
      <h2 className="text-xl my-1">Price</h2>
      <div className=" text-md">
        <input
          onChange={radioHandle}
          value=""
          id="ramjan"
          type="radio"
          name="ramjan"
        />
        <label className="ml-6" htmlFor="ramjan">
          All
        </label>
        <Input
          radioHandle={radioHandle}
          value={50}
          title="0-50$"
          name="ramjan"
        />
        <Input
          radioHandle={radioHandle}
          value={100}
          title="50-100$"
          name="ramjan"
        />
        <Input
          radioHandle={radioHandle}
          value={150}
          title="100-150$"
          name="ramjan"
        />
        <Input
          radioHandle={radioHandle}
          value={200}
          title="Over 150$"
          name="ramjan"
        />
      </div>
    </div>
  );
};

export default Price;
