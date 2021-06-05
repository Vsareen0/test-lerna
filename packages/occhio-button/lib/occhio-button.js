import React from "react";
// import cx from "clsx";
import styles from "./styles.css";

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  // const mode = primary ? "occhio-button--primary" : "occhio-button--secondary";
  // Button classes
  // const classes = cx(
  //   styles["occhio-button"],
  //   styles[mode],
  //   size && styles[`occhio-button--${size}`]
  // );
  return (
    <button
      type="button"
      className={styles.Button}
      // style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export { Button };
