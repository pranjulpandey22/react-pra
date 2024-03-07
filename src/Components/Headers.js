import { HeadersUrl } from "../utilis/Constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Headers = () => {
  const [button, setButton] = useState("Login");

  const onChange = () => {
    button === "Login" ? setButton("Logout") : setButton("Login");
  };

  return (
    <div className="header">
      <img className="logo" src={HeadersUrl} alt="" />
      <div className="navbar">
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li>
            <Link to="/aboutus"> About Us</Link>
          </li>
          <li>
          <Link to="/contactus"> Contact Us</Link></li>
          <li>Cart</li>
          <button
            style={{ padding: "20px", margin: "20px" }}
            onClick={onChange}
          >
            {button}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Headers;
