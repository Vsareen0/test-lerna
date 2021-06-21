import React from "react";
import cx from "clsx";
import { Icon } from "@tempestoso/line-awesome-icons";
import "../../public/base.css";
import styles from "./styles.css";

const Chips = ({
  success,
  warning,
  danger,
  disabled,
  removable,
  removeIcon,
  icon,
  filled,
  children,
  ...args
}) => {
  const classes = cx(
    styles["occhio-chips"],
    filled && styles["occhio-chips--filled"],
    filled && styles["occhio-chips--filled:hover"],
    success && styles["occhio-chips--success"],
    warning && styles["occhio-chips--warning"],
    danger && styles["occhio-chips--danger"],
    disabled && styles["occhio-chips--disabled"]
  );
  return (
    <div className={classes} {...args}>
      {icon && <Icon iconClass={icon}></Icon>}
      {children}
      {removable && (
        <Icon
          style={{ fontSize: "14px", marginLeft: "5px" }}
          iconClass={removeIcon ? removeIcon : "las la-times-circle"}
        ></Icon>
      )}
    </div>
  );
};

export { Chips };
