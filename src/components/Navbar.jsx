import React from "react";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <>
      <div className="navbarcontents">
        <div className="navbar">
          <h1>Aloha</h1>
          <Burger></Burger>
        </div>
      </div>
    </>
  );
};
export default Navbar;
