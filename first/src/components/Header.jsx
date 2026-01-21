import {useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnline";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const online = useOnlineStatus();
  return (
    <div className="header flex justify-between h-20 px-4 items-center bg-amber-100">
      <div>
        <h1 className="text-4xl font-bold">Food Delivery</h1>
      </div>
      <div>
        <ul className="flex gap-8">
          <li className="font-medium">
            online Status: {online?'online':'offline'}
          </li>
          <li className="font-medium">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="font-medium">
            <Link to={'/about'}>About</Link>
          </li>
          <li className="font-medium">
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li className="font-medium">
            <Link to={'/grocery'}>grocery</Link>
          </li>
          <li className="font-medium">
            <a href="#">Cart</a>
          </li>
          <button
            className="login font-medium"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
