import { css } from "@emotion/css";
import { useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import { colors } from "../../config/config";

let wrapperClassName = css({
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "14px 14px",
  backgroundColor: "#e6fce6",
  background: "-webkit-linear-gradient(45deg, #e6fce6, #fafcfa)",
  color: colors.textPrimary,
  position: "relative",

  ":hover": {
    background: "-webkit-linear-gradient(45deg, #0c592c, #228b22)",
    color: "white",
    textDecoration: "none",
  },
});

// Define a CSS class for the cart icon badge
let badgeClassName = css({
  height: "21px",
  width: "21px",
  borderRadius: "100%",
  backgroundColor: "#4CAF50",
  textAlign: "center",
  top: "2px",
  right: "2px",
  position: "absolute",
  color: "#e6fce6",
  fontWeight: "bold",
  transform: "skew(20deg)",
});

// Define a CSS class for the cart icon
let iconClassName = css({
  height: 48,
  padding: "14px 14px",
  transform: "skew(20deg)",
});

function CartIcon() {
  // Use the `useSelector` hook to access the `inCart` property of the `cart` slice of the Redux store
  const inCart = useSelector((state) => state.cart.inCart);

  // Count the number of items in the cart using the `Object.keys` function and the `length` property
  const itemsInCart = Object.keys(inCart).length;

  // Render the `CartIcon` component with a wrapper div, the cart icon, and a badge showing the number of items in the cart (if greater than 0)
  return (
    <div className={wrapperClassName}>
      <Icon path={mdiCartOutline} className={iconClassName} />
      {itemsInCart > 0 && <div className={badgeClassName}>{itemsInCart}</div>}
    </div>
  );
}

CartIcon.propTypes = {
  // No props are required for this component
};

export default CartIcon;
