import React, { useState } from "react";
import cx from "clsx";
import { Button } from "@tempestoso/occhio-button";
import { OutsideAlerter } from "@tempestoso/occhio-outside-click";
import "../../public/base.css";
import styles from "./styles.css";

const DropdownButton = ({ label, items, ...args }) => {
  const [expand, setExpand] = useState(false);

  const classes = cx(styles["occhio-dropdown"]);
  const listClasses = cx(
    styles["occhio-dropdown-list"],
    styles["occhio-dropdown-list:hover"]
  );

  const listItems = items.map((item, index) => (
    <li key={index} className={listClasses} {...item}>
      {item.label}
    </li>
  ));

  return (
    <OutsideAlerter onOutsideClick={(e) => setExpand(e)}>
      <Button
        label={label}
        color="primary"
        onClick={() => setExpand(!expand)}
        {...args}
      ></Button>
      {expand && <ul className={classes}>{listItems}</ul>}
    </OutsideAlerter>
  );
};

export { DropdownButton };
