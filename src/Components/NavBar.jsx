import React, { useEffect, useState, useRef } from "react";
import NavLogo from "../Storage/Nav-logo.png";

const NavBar = () => {
  const [login, setLogin] = useState(false);
  const [navBarBackgroundColor, setNavBarBackgroundColor] = useState("");

  const profileOptionsRef = useRef(null);
  const hideProfileOptionsTimeoutRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setNavBarBackgroundColor(scrollPosition > 0 ? "black" : "");
  };

  const hideProfileOptions = () => {
    hideProfileOptionsTimeoutRef.current = setTimeout(() => {
      setLogin(false);
    }, 200);
  };

  const cancelHideProfileOptions = () => {
    clearTimeout(hideProfileOptionsTimeoutRef.current);
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
        <img src={NavLogo} alt="Logo" />
      </div>
      <div className="nav-p">
        <p>Home</p>
        <p>Contact</p>
        <p>Free Plan</p>
        <p>Shop</p>
      </div>
      <div className="button-profile">
        <p>
          <i
            className="fa-solid fa-user"
            onMouseEnter={() => setLogin(true)}
            onMouseLeave={hideProfileOptions}
          ></i>
        </p>
        {login && (
          <div
            className="profile-options"
            onMouseEnter={cancelHideProfileOptions}
            onMouseLeave={hideProfileOptions}
            ref={profileOptionsRef}
          >
            <p>Login</p>
            <p>Sign up</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
