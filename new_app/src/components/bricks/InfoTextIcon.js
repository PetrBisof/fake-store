import Icon from "@mdi/react";
import { css, cx } from "@emotion/css";
import PropTypes from "prop-types";

let containerClassName = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "xx-large",
  fontWeight: "bold",
});

let iconClassName = css({
  maxWidth: "200px",
});

// Defining a CSS class for rotating the icon element.
let rotateClassName = css({
  animation: "spin 1s linear infinite",
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
});

function InfoTextIcon(props) {
  return (
    <div className={containerClassName}>
      <Icon
        className={
          props.rotate ? cx(iconClassName, rotateClassName) : iconClassName
        }
        path={props.icon}
      />
      {props.text}
    </div>
  );
}

InfoTextIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rotate: PropTypes.bool,
};

export default InfoTextIcon;
