import { LOGOURL } from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlieStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Log in");
  console.log("header rendered");
  const onlineStatus = useOnlieStatus();

  return (
    <div className="flex justify-between bg-pink-50 sm:bg-yellow-50 shadow-lg lg:bg-green-50">
      <div className="logo-container">
        <img className="logo" src={LOGOURL} />
      </div>
      <div className="items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Statuss {onlineStatus ? "online" : "offline"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Log in"
                  ? setBtnNameReact("Log out")
                  : setBtnNameReact("Log in");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
