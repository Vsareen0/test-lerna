import React from "react";
import cx from "clsx";
import styles from "./styles.css";
import { Icon } from "@tempestoso/line-awesome-icons";

const Chips = ({ icon, filled, children, ...args }) => {
  const classes = cx(
    styles["occhio-chips"],
    filled && styles["occhio-chips--filled"]
  );
  return (
    <div className={classes} {...args}>
      {icon && <Icon iconClass={icon}></Icon>}
      {children}
    </div>
  );
};

export { Chips };
