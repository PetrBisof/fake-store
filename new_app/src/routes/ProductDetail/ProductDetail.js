import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { css } from "@emotion/css";
import CartButton from "../../components/bricks/CartButton";
import useFetch from "../../hooks/use-fetch";
import FetchResolver from "../../components/bricks/FetchResolver";
import useWindowSize from "../../hooks/use-window-size";
import { formatPrice } from "../../utils/formatPrice";
// Defining CSS classes using Emotion
let wrapperContentClassName = (screenSize) =>
  css({
    display: "flex",
    flexDirection: screenSize === "l" ? "row" : "column",
    margin: "16px",
  });

let imageClassName = css({
  minWidth: "220px",
  maxWidth: "320px",
  objectFit: "contain",
  width: "100%",
});

let imageWrapperClassName = css({
  height: "320px",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  padding: "10px",
  margin: "0px 40px",
});

let infoWrapperClassName = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

let titleClassName = css({
  fontSize: "x-large",
  fontWeight: "bold",
  paddingTop: "20px",
});
let priceClassName = css({
  fontSize: "large",
  fontWeight: "bold",
  padding: "10px 0px 40px 0px",
});
let descriptionClassName = css({
  fontSize: "16px",
  padding: "10px 60px 40px 0px",
});
let cartWrapperClassName = css({
  fontSize: "x-large",
  fontWeight: "bold",
  flexGrow: 1,
  button: {
    height: "44px",
  },
});

function ProductDetail() {
  // Getting the product ID from the URL parameters using useParams
  const { id } = useParams();

  // Getting the screen size using a custom hook useWindowSize
  const screenSize = useWindowSize();

  // Initializing state variables for the product and the fetch API request
  const [product, setProduct] = useState(null);
  const [{ response, error, isLoading }, fetch] = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  // Triggering the fetch API request on component mount using useEffect
  useEffect(() => {
    fetch();
  }, [fetch]);

  // Updating the product state when the API response is received using useEffect
  useEffect(() => {
    response?.data && setProduct(response.data);
  }, [response]);

  // Rendering the product details and cart button inside a FetchResolver component to handle loading and error states
  return (
    <FetchResolver isLoading={isLoading} error={error}>
      <div className={wrapperContentClassName(screenSize)}>
        <div className={imageWrapperClassName}>
          <img
            src={product?.image}
            className={imageClassName}
            alt={product?.title}
          />
        </div>
        <div className={infoWrapperClassName}>
          <p className={titleClassName}>{product?.title}</p>
          <p className={priceClassName}>{formatPrice(product?.price)}</p>
          <p className={descriptionClassName}>{product?.description}</p>
          <div className={cartWrapperClassName}>
            <CartButton id={id} />
          </div>
        </div>
      </div>
    </FetchResolver>
  );
}

ProductDetail.propTypes = {
  // No props are required for this component
};

export default ProductDetail;
