import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";
import { Button } from "@tempestoso/occhio-button";

const ButtonGroup = ({ items, orientation, ...args }) => {
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

  const listItems = items.map((item) => <Button {...item}></Button>);
  return (
    <div className={classes} {...args}>
      {items && listItems}
    </div>
  );
};

ButtonGroup.propTypes = {
  /**
   * orientation handler
   */
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  /**
   * Items
   */
  items: PropTypes.array,
};

ButtonGroup.defaultProps = {
  /**
   * orientation handler
   */
  orientation: "horizontal",
  /**
   * Items
   */
  items: [
    { icon: "la la-bold" },
    { icon: "la la-underline" },
    { icon: "la la-italic" },
  ],
};

export { ButtonGroup };
