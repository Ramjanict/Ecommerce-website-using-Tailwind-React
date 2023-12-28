import { AiFillStar } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div className="border border-[#ededed] p-5 m-5 cursor-pointer ">
      <img className="w-40 mb-4" src={img} alt={title} />
      <div className="card-detail">
        <h3 className="mb-4">{title}</h3>
        <div className="flex mb-4 items-center gap-x-[1px] text-[#d5ab55]">
          {star}
          {star}
          {star}
          {star}
          <span className="ml-1 text-black">{reviews}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            <BsFillBagCheckFill className="text-[#535353]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
