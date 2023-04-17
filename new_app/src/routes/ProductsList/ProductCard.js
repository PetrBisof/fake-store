import { Link } from "react-router-dom";
import { css } from "@emotion/css";
import CartButton from "../../components/bricks/CartButton";
import PropTypes from "prop-types";
import { formatPrice } from "../../utils/formatPrice";

let productContainerClassName = css({
  border: "1px solid grey",
  height: "320px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  borderRightWidth: "2px",
  borderImage: "linear-gradient(white,#f1f1f1,white) 0 33 60%",
  button: {
    height: "30px",
  },
});

// Define a CSS class for the product image element.
let imageClassName = css({
  objectFit: "contain",
  width: "100%",
});

// Define a CSS class for the container of the product image.
let imageContainerClassName = css({
  height: "180px",
  padding: "20px",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
});

// Define a CSS class for the container of the product title and price.
let textWrapperClassName = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "2px 21px",
  textAlign: "center",
  minHeight: "90px",
});

// Define a CSS class for the product title element.
let titleClassName = css({
  display: "-webkit-box",
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

function ProductCard(props) {
  return (
    <div className={productContainerClassName}>
      <div className={imageContainerClassName}>
        <img src={props.image} className={imageClassName} alt={props.title} />
      </div>
      <div className={textWrapperClassName}>
        <Link
          className={titleClassName}
          to={`/fake-store/productDetail/${props.id}`}
        >
          {props.title}
        </Link>
        <p>{formatPrice(props.price)}</p>
      </div>
      <CartButton id={props.id} />
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
