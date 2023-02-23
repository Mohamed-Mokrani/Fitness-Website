import React, { useEffect, useState } from "react";
import BullLogo from "../Images/Bull-logo.png";

const NavBar = () => {
  const [login, setLogin] = useState(false);
  const loginButtonIn = () => setLogin(true);
  const loginButtonOut = () => setLogin(false);
  const [navBarBackgroundColor, setNavBarBackgroundColor] = useState("");
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setNavBarBackgroundColor(scrollPosition > 0 ? "black" : "");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav-bar" style={{ backgroundColor: navBarBackgroundColor }}>
      <div>
        <img src={BullLogo} alt="Bull Logo" />
      </div>
      <div className="nav-p">
        <p>Home</p>
        <p>Contact</p>
        <p>Free Plan</p>
      </div>
      <div className="button-profile">
        <p>
          <i class="fa-solid fa-user" onClick={loginButtonIn}></i>
        </p>
        {login && (
          <div className="profile-options" onClickCapture={loginButtonOut}>
            <h1>Login</h1>
            <h1>Sign up</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
