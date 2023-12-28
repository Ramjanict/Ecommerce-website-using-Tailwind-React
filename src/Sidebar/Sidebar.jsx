import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({ radioHandle }) => {
  return (
    <div className="w-[15%] fixed border-r-2 border-[#e5e5e5] flex flex-col  items-center h-screen">
      <div className="">
        <a href="#">
          <img src="logo.png" className="w-[50%] rounded-full mx-auto" />
        </a>
      </div>
      <div>
        <Category radioHandle={radioHandle} />
        <Price radioHandle={radioHandle} />
        <Colors radioHandle={radioHandle} />
      </div>
    </div>
  );
};

export default Sidebar;
