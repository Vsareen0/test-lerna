import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import styles from "./styles.css";
import { Icon } from "../../line-awesome-icons/lib/line-awesome-icons";

const Button = ({
  primary,
  variant,
  backgroundColor,
  size,
  label,
  iconLeft,
  iconRight,
  icon,
  ...props
}) => {
  const mode = primary ? "occhio-button--primary" : "occhio-button--secondary";
  // Button classes
  const classes = cx(
    styles["occhio-button"],
    styles[mode],
    styles[`occhio-button--${variant}`],
    size && styles[`occhio-button--${size}`]
  );
  return (
    <button
      type="button"
      className={classes}
      variant={variant}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {iconLeft && (
        <>
          <Icon
            iconClass={iconLeft}
            style={{ verticalAlign: "middle", marginRight: "5px" }}
          ></Icon>
        </>
      )}
      {label}
      {iconRight && (
        <>
          <Icon
            iconClass={iconRight}
            style={{ verticalAlign: "middle", marginLeft: "5px" }}
          ></Icon>
        </>
      )}
      {icon && (
        <>
          <Icon iconClass={icon} style={{ verticalAlign: "middle" }}></Icon>
        </>
      )}
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
   * Look of the button
   */
  variant: PropTypes.oneOf(["flat", "default", "outline"]),
  /**
   * Icon
   */
  icon: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
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
  variant: "default",
  onClick: undefined,
};

export { Button };
