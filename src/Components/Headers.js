import { HeadersUrl } from "../utilis/Constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utilis/useStatus";
import UserContext from "../utilis/UserContext";
import { useSelector } from "react-redux";
import { fromJSON } from "postcss";

const Headers = () => {
  const [button, setButton] = useState("Login");
  const onlineStatus = useStatus();
  const onChange = () => {
    button === "Login" ? setButton("Logout") : setButton("Login");
  };
  const { name } = useContext(UserContext);
  //subscribe to a store using selector
  const item = useSelector((state) => state.cart.cartItems);
  // console.log(item,'redux Item');

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <img className="w-24 h-24" src={HeadersUrl} />
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            {" "}
            Online Status: {onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About Us</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart"> Cart({item.length}) </Link>
          </li>
          <button onClick={onChange}>{button}</button>
          <li className="px-4">{name}</li>
        </ul>
      </div>
    </div>
  );
};
export default Headers;
