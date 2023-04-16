import { NavLink } from "react-router-dom";
import { css } from "@emotion/css";
import useWindowSize from "../../hooks/use-window-size";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import Icon from "@mdi/react";
import { mdiMenu, mdiCartOutline } from "@mdi/js";
import CartIcon from "../bricks/CartIcon";
import { colors } from "../../config/config";

// Define styles using css function from emotion library
let routeBarClassName = css({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "2px solid #f2faf3",
  marginBottom: "20px",
});

let linksWrapperClassName = css({
  display: "flex",
  height: 48,
  transform: "skew(-20deg)",
  position: "relative",
  left: "1.5em",
  "a:last-child": {
    padding: "14px 54px",
  },
});

let logoWrapperClassName = css({
  height: 48,
  transform: "skew(-20deg)",
  paddingRight: "47px",
  paddingLeft: "33px",
  display: "flex",
  alignItems: "center",
  position: "relative",
  right: "0.5em",
  background: "-webkit-linear-gradient(45deg, #0c592c, #228b22)",
});

let menuItemClassName = (isHamburgerMenu) =>
  css({
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: isHamburgerMenu ? "6px 28px" : "14px 28px",
    backgroundColor: "#e6fce6",
    background: "-webkit-linear-gradient(45deg, #e6fce6, #fafcfa)",
    color: colors.textPrimary,
    ":hover": {
      background: "-webkit-linear-gradient(45deg, #0c592c, #228b22)",
      color: "white",
      textDecoration: "none",
    },
  });

let textClassName = (isHamburgerMenu) =>
  css({
    fontFamily: "Saira Semi Condensed, sans-serif",
    fontWeight: "bold",
    transform: `skew(${isHamburgerMenu ? "0deg" : "20deg"})`,
  });

let sloganClassName = css({
  fontWeight: 200,
  fontSize: "26px",
});

let sideMenuClassName = css({
  position: "absolute",
  top: 50,
  right: 0,
  width: "300px",
  overflowY: "scroll",
  background: "white",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
});

function RouteBar() {
  let [isMenuOpened, setIsMenuOpened] = useState(false);
  let screenSize = useWindowSize();

  // Define useEffect hook to update state variable
  useEffect(() => {
    if (screenSize === "l" && isMenuOpened === true) {
      setIsMenuOpened(false);
    }
  }, [screenSize, isMenuOpened]);

  // Define helper functions to get hamburger menu, side menu, and links
  function getLinks(isHamburgerMenu) {
    return (
      <>
        <NavLink
          className={menuItemClassName()}
          to="/fake-store/products"
          onClick={() => setIsMenuOpened(false)} //Closes meni with links when NavLink is clicked
        >
          <p className={textClassName(isHamburgerMenu)}>Products</p>
        </NavLink>

        <NavLink className={menuItemClassName()} to="/fake-store/about">
          <p className={textClassName(isHamburgerMenu)}>About</p>
        </NavLink>
      </>
    );
  }

  // Defines a function that returns an Icon component for a hamburger menu
  function getHamburgerMenu() {
    return (
      <Icon
        path={mdiMenu}
        className={menuItemClassName(true)} // Sets a CSS class for the Icon component
        onClick={() => setIsMenuOpened((prevState) => !prevState)} // Toggles isMenuOpened state when Icon is clicked
      />
    );
  }

  // Defines a function that returns a div containing the side menu with getLinks component
  function getSideMenu() {
    return <div className={sideMenuClassName}>{getLinks(true)}</div>;
  }

  // Returns a component with a header bar that contains a logo, a slogan (only visible on large screens),
  // and links for Products, About, and a shopping cart icon (shown as a hamburger menu icon on small screens)

  return (
    <div className={routeBarClassName}>
      {isMenuOpened && getSideMenu()}
      <span className={logoWrapperClassName}>
        <img src={logo} height={28} alt={"logo"} />
      </span>
      {screenSize === "l" && (
        <span className={sloganClassName}>We are making shopping fake</span>
      )}
      <div className={linksWrapperClassName}>
        <NavLink to="/fake-store/cart">
          <CartIcon
            path={mdiCartOutline}
            className={menuItemClassName()}
            onClick={() => setIsMenuOpened((prevState) => !prevState)}
          />
        </NavLink>
        {screenSize === "l" ? getLinks() : getHamburgerMenu()}
      </div>
    </div>
  );
}

CartIcon.propTypes = {
  // No props are required for this component
};

export default RouteBar;
