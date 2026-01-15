import { use, useState } from "react";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  return (
    <div className="header">
      <div>
        <h1>Food Delivery</h1>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
