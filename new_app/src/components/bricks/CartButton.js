import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  setNewValueToCart,
} from "../../redux/reducers/cart";
import { css, cx } from "@emotion/css";
import PropTypes from "prop-types";

// Define button styles
let buttonClassName = css({
  marginBottom: "16px",
  backgroundColor: "white",
  background: "rgb(255, 255, 255)",
  border: "1px solid rgba(0, 0, 0, 0.15)",
  borderRadius: "4px",
  boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 8px -8px",
  color: "rgb(28, 37, 41)",
  padding: "4px 16px",
  ":hover": {
    backgroundColor: "#228b22",
    color: "white",
  },
});

// Define plus/minus button styles
let plusMinusButtons = css({
  padding: "4px 6px",
});

let buttonWrapperClassName = css({
  alignItems: "baseline",
  justifyContent: "space-between",
  maxWidth: "120px",
});

// Define quantity input field styles
let quantityInputClassName = css({
  padding: "4px",
  textAlign: "center",
  border: "none",
  ":hover": {
    boxShadow: "inset 0 0 0 1px #cecece",
    borderRadius: "4px",
  },
  ":focus": {
    boxShadow: "inset 0 0 0 1px #333",
    outline: "none",
    borderRadius: "4px",
  },
  "::-webkit-outer-spin-button": {
    webkitAppearance: "none",
    margin: 0,
  },
  "::-webkit-inner-spin-button": {
    webkitAppearance: "none",
    margin: 0,
  },
});

function CartButton(props) {
  // Get the inCart state from the Redux store
  const inCart = useSelector((state) => state.cart.inCart);
  const dispatch = useDispatch();
  // Initialize the inputValue state using the useState hook - is here to deal with set new value from input
  let [inputValue, setInputValue] = useState();

  // If the item is not in the cart or has a quantity of 0, show the "Add to cart" button
  if (!inCart[props.id] || inCart[props.id] === 0) {
    return (
      <button
        className={buttonClassName}
        onClick={() => {
          // Dispatch the addToCart action with the item ID as the payload
          dispatch(addToCart(props.id));
        }}
      >
        Add to cart
      </button>
    );
  } else {
    // Otherwise, show the plus/minus buttons and quantity input field
    return (
      <div className={buttonWrapperClassName}>
        <button
          className={cx(buttonClassName, plusMinusButtons)}
          onClick={() => {
            // Dispatch the removeFromCart action with the item ID as the payload
            dispatch(removeFromCart(props.id));
          }}
        >
          <p>-</p>
        </button>
        <input
          className={quantityInputClassName}
          value={
            // If inputValue is a number or null, use it as the input value, otherwise use the value from the Redux store
            typeof inputValue === "number" || inputValue === null
              ? inputValue
              : inCart[props.id]
          }
          type="number"
          pattern="[0-9]*"
          max="50"
          min="0"
          step="1"
          onBlur={() => {
            setInputValue(undefined);
            dispatch(setNewValueToCart({ id: props.id, value: inputValue }));
          }}
          onChange={(event) =>
            setInputValue(
              event.target.value ? Number(event.target.value) : null
            )
          }
        />
        <button
          className={cx(buttonClassName, plusMinusButtons)}
          onClick={() => {
            dispatch(addToCart(props.id));
          }}
        >
          <p>+</p>
        </button>
      </div>
    );
  }
}
CartButton.propTypes = {
  id: PropTypes.number.isRequired,
};
export default CartButton;
