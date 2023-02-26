import React, { useEffect, useState } from "react";
import NavLogo from "../Storage/Nav-logo.png";

const NavBar = () => {
  const [login, setLogin] = useState(false);
  const [shop, setShop] = useState(false);
  const [navBarBackgroundColor, setNavBarBackgroundColor] = useState("");
  const [loginCss, setLoginCss] = useState({
    color: "white",
    rotate: "",
    opacity: "0",
  });

  const [shopCss, setShopCss] = useState({
    color: "white",
    opacity: "0",
  });

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
        <img src={NavLogo} alt="Logo" />
      </div>
      <div className="nav-p">
        <p>Home</p>
        <p>Contact</p>
        <p>Free Plan</p>
        <p
          onMouseEnter={() => {
            setShop(true);
            setShopCss({ color: "rgb(57, 153, 255)", opacity: "1" });
          }}
          style={{ color: shopCss.color }}
        >
          Shop
        </p>
        {shop && (
          <div
            className="shop-container"
            onMouseLeave={() => {
              setTimeout(() => {
                setShop(false);
              }, 300);

              setShopCss({
                color: "white",
                opacity: "0",
              });
            }}
            style={{ opacity: shopCss.opacity }}
          >
            <i class="fa-solid fa-caret-up"></i>
            <div className="invisible-shop"></div>
          </div>
        )}
      </div>
      <div className="button-profile">
        <p>
          <i
            className="fa-solid fa-user"
            onMouseEnter={() => {
              setLogin(true);
              setLoginCss({
                color: "rgb(57, 153, 255)",
                rotate: "rotateY(180deg)",
                opacity: "1",
              });
            }}
            style={{ color: loginCss.color, transform: loginCss.rotate }}
          ></i>
        </p>
        {login && (
          <div
            className="profile-options"
            onMouseLeave={() => {
              setTimeout(() => {
                setLogin(false);
              }, 300);
              setLoginCss({
                color: "white",
                rotate: "rotateY(0deg)",
                opacity: "0",
              });
              setLoginCss.opacity("0");
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
