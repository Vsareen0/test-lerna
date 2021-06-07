import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import styles from "./styles.css";

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? "occhio-button--primary" : "occhio-button--secondary";
  // Button classes
  const classes = cx(
    styles["occhio-button"],
    styles[mode],
    size && styles[`occhio-button--${size}`]
  );
  return (
    <button
      type="button"
      className={classes}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export { Button };
