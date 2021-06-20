import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

const ButtonGroup = ({ children, orientation, ...args }) => {
  const classes = cx(
    orientation === "horizontal"
      ? styles["occhio-button-group"]
      : styles["occhio-button-group-vertical"],
    orientation === "horizontal"
      ? styles["occhio-button-group > *:not(:first-child)"]
      : styles["occhio-button-group-vertical > *:not(:first-child)"],
    orientation === "horizontal"
      ? styles["occhio-button-group > *:not(:last-child)"]
      : styles["occhio-button-group-vertical > *:not(:last-child)"]
  );
  return (
    <div className={classes} {...args}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  /**
   * orientation handler
   */
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
};

ButtonGroup.defaultProps = {
  /**
   * orientation handler
   */
  orientation: "horizontal",
};

export { ButtonGroup };
