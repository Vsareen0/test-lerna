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
  loading,
  disabled,
  ...props
}) => {
  // Button classes
  const classes = cx(
    styles["occhio-button"],
    styles[`occhio-button--${variant}`],
    size && styles[`occhio-button--${size}`],
    styles[`occhio-button--${color}`],
    styles[`occhio-button--${color}:hover`],
    disabled && styles[`occhio-button--disabled`],
    loading && styles[`occhio-button--loading`],
    loading && styles[`occhio-button-loader`]
  );

  return (
    <button
      type="button"
      disabled={disabled}
      disabled={loading}
      className={classes}
      variant={variant}
      style={(backgroundColor || color) && { backgroundColor, color }}
      {...props}
    >
      {!loading && iconLeft && (
        <>
          <Icon
            iconClass={iconLeft}
            style={{ verticalAlign: "middle", marginRight: "5px" }}
          ></Icon>
        </>
      )}
      {!loading && label}
      {!loading && iconRight && (
        <>
          <Icon
            iconClass={iconRight}
            style={{ verticalAlign: "middle", marginLeft: "5px" }}
          ></Icon>
        </>
      )}
      {!loading && icon && (
        <>
          <Icon iconClass={icon} style={{ verticalAlign: "middle" }}></Icon>
        </>
      )}
      {loading && <Icon iconClass="las la-spinner"></Icon>}
    </button>
  );
};

Button.propTypes = {
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
  color: "primary",
  size: "medium",
  variant: "default",
  onClick: undefined,
};

export { Button };
