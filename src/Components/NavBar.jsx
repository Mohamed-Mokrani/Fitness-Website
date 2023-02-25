import React, { useEffect, useState, useRef } from "react";
import NavLogo from "../Storage/Nav-logo.png";

const NavBar = () => {
  const [login, setLogin] = useState(false);
  const [navBarBackgroundColor, setNavBarBackgroundColor] = useState("");

  const profileOptionsRef = useRef(null);
  const hideProfileOptionsRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setNavBarBackgroundColor(scrollPosition > 0 ? "black" : "");
  };

  const hideProfileOptions = () => {
    hideProfileOptionsRef.current = setTimeout(() => {
      setLogin(false);
    }, 300);
  };

  const profileOptions = () => {
    clearTimeout(hideProfileOptionsRef.current);
    setLogin(true);
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
            onMouseEnter={profileOptions}
            onMouseLeave={hideProfileOptions}
          ></i>
        </p>
        {login && (
          <div
            className="profile-options"
            onMouseEnter={profileOptions}
            onMouseLeave={hideProfileOptions}
            ref={profileOptionsRef}
          >
            <i class="fa-solid fa-caret-up"></i>

            <p>
              My Shop <i class="fa-solid fa-cart-shopping"></i>
            </p>
            <p>
              Settings <i class="fa-solid fa-gear"></i>
            </p>
            <p>
              Membership <i class="fa-solid fa-money-check-dollar"></i>
            </p>
            <p className="premium">
              Premium <i class="fa-solid fa-star"></i>
            </p>
            <p>
              Logout<i class="fa-solid fa-right-from-bracket"></i>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
