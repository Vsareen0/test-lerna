import React, { useState } from "react";
import { Icon } from "@tempestoso/line-awesome-icons";
import cx from "clsx";
import styles from "./styles.css";

const Fab = ({
  icon,
  iconClose,
  expandTo,
  items,
  item: CustomItem,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const classes = cx(styles["occhio-fab"]);
  const expandClass = cx(styles[`occhio-fab--${expandTo}`]);

  return (
    <>
      <div style={{ position: "fixed", bottom: "5%", right: "5%" }}>
        <div style={{ position: "relative" }}>
          <button className={classes} onClick={() => setOpen(!open)} {...args}>
            <Icon iconClass={!open ? icon : iconClose}></Icon>
          </button>
          <div className={expandClass}>
            {open &&
              items &&
              items.map((item) => <CustomItem item={item}></CustomItem>)}
          </div>
        </div>
      </div>
    </>
  );
};

export { Fab };
