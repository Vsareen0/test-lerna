import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import "../../public/base.css";
import styles from "./styles.css";
import { Icon } from "@tempestoso/line-awesome-icons";

const Button = ({
  variant,
  backgroundColor,
  color,
  size,
  label,
  iconLeft,
  iconRight,
  icon,
  disabled = false,
  ...props
}) => {
  // Button classes
  const classes = cx(
    styles["occhio-button"],
    styles[`occhio-button--${variant}`],
    size && styles[`occhio-button--${size}`],
    styles[`occhio-button--${color}`],
    styles[`occhio-button--${color}:hover`],
    disabled && styles[`occhio-button--disabled`]
  );
  return (
    <button
      type="button"
      disabled={disabled}
      className={classes}
      variant={variant}
      style={(backgroundColor || color) && { backgroundColor, color }}
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
   * What icon, text color to use
   */
  color: PropTypes.string,
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
  color: null,
  primary: false,
  size: "medium",
  variant: "default",
  onClick: undefined,
};

export { Button };
