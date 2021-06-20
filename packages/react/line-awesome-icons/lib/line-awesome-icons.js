import React from "react";
import cx from "clsx";
import lineAwesome from "./css/line-awesome.css";

const Icon = ({ iconClass, ...props }) => {
  /**
   * We are splitting class here,
   * Ex: la-2x las la-wheelchair
   * On splitting,
   *  ['la-2x', 'las', 'la-wheelchair']
   */
  let iconClasses = iconClass.split(" ");
  iconClasses = iconClasses.map((name) => lineAwesome[name]);
  const classes = cx(...iconClasses);
  return (
    <i
      style={{ marginLeft: "2px", marginRight: "2px" }}
      className={classes}
      {...props}
    ></i>
  );
};

export { Icon };
