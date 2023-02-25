import React, { useEffect, useState } from "react";
import NavLogo from "../Storage/Nav-logo.png";

const NavBar = () => {
  const [login, setLogin] = useState(false);
  const [navBarBackgroundColor, setNavBarBackgroundColor] = useState("");
  const [loginCss, setLoginCss] = useState({
    color: "white",
    rotate: "",
    opacity: "0",
  });

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setNavBarBackgroundColor(scrollPosition > 0 ? "black" : "");
  };

  const hideProfileOptions = () => {
    setTimeout(() => {
      setLogin(false);
    }, 300);
  };

  const profileOptions = () => {
    setLogin(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacityOut = () =>
    setLoginCss((prevState) => ({ ...prevState, opacity: "0" }));

  const btnHover = () =>
    setLoginCss((prevState) => ({
      ...prevState,
      color: "rgb(57, 153, 255)",
      rotate: "rotateY(180deg)",
      opacity: "1",
    }));

  const btnUnhover = () =>
    setLoginCss((prevState) => ({
      ...prevState,
      color: "white",
      rotate: "rotateY(0deg)",
      opacity: "0",
    }));

  //
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
            onMouseEnter={() => {
              profileOptions();
              btnHover();
            }}
            style={{ color: loginCss.color, transform: loginCss.rotate }}
          ></i>
        </p>
        {login && (
          <div
            className="profile-options"
            onMouseLeave={() => {
              hideProfileOptions();
              btnUnhover();
              opacityOut();
            }}
            style={{ opacity: loginCss.opacity }}
          >
            <i class="fa-solid fa-caret-up"></i>
            <div className="invisible-profile"></div>

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
