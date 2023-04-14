import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/reducers/products";
import { css } from "@emotion/css";
import ProductCard from "./ProductCard";
import useFetch from "../../hooks/use-fetch";
import FetchResolver from "../../components/bricks/FetchResolver";

// Define the CSS class for the container element using Emotion CSS
const wrapperClassName = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
  gridAutoFlow: "dense",
  "@media (max-width: 460px)": {
    gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
  },
});

function ProductsList() {
  // Get the list of products from the Redux store using the useSelector hook
  const products = useSelector((state) => state.allProducts.products);
  // Get the dispatcher function for setting the products in the store using the useDispatch hook
  const dispatch = useDispatch();
  // Get the response, error and isLoading flags from the custom useFetch hook
  const [{ response, error, isLoading }, fetch] = useFetch(
    "https://fakestoreapi.com/products"
  );

  // Fetch the products from the API when the component mounts using the useEffect hook
  useEffect(() => {
    fetch();
  }, [fetch]);

  // Set the products in the Redux store when the response is received using the useEffect hook
  useEffect(() => {
    response?.data && dispatch(setProducts(response.data));
  }, [response, dispatch]);

  return (
    <FetchResolver isLoading={isLoading} error={error}>
      <div className={wrapperClassName}>
        {products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </FetchResolver>
  );
}

ProductsList.propTypes = {
  // No props are required for this component
};

export default ProductsList;
