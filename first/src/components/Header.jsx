import {useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnline";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const online = useOnlineStatus();
  return (
    <div className="header">
      <div>
        <h1>Food Delivery</h1>
      </div>
      <div>
        <ul>
          <li>
            online Status: {online?'online':'offline'}
          </li>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <button
            className="login"
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
