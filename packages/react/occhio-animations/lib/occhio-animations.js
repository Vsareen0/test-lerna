import cx from "clsx";
import React from "react";
import styles from "./styles.css";

const Animation = ({ mode, type, children, ...args }) => {
  const classes = cx(
    styles[`occhio-animation--${type}${mode ? "-out" : "-in"}`]
  );

  return (
    <div className={classes} {...args}>
      {children && children}
    </div>
  );
};
export { Animation };
