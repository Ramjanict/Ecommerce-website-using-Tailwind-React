import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
const Nav = ({ query, handleSearch }) => {
  return (
    <nav className="flex justify-around py-4 items-center border-b border-[#f3f3f3] w-[70%] mx-auto">
      <div>
        <input
          onChange={handleSearch}
          value={query}
          className="py-2 px-6 max-w-80 bg-[#f7f6f6] rounded-md outline-none"
          type="text"
          placeholder="Enter your search shoes"
        />
      </div>
      <div className="flex gap-x-8">
        <a href="#">
          <FiHeart size={25} />
        </a>
        <a href="#">
          <AiOutlineShoppingCart size={25} />
        </a>
        <a href="#">
          <AiOutlineUserAdd size={25} />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
