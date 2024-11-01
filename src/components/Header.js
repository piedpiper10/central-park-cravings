import { LOGOURL } from "../Utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlieStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Log in");
  console.log("header rendered");
  const onlineStatus = useOnlieStatus();
  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using selector
  //we are just subscribing to small portion of store that is cart
  const cartItems = useSelector((store) => store.cart.items);
  console.log("check for the cart", cartItems);

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
            <Link to="/cart" className="font-bold text-xl">
              Cart({cartItems.length})
            </Link>
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
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
