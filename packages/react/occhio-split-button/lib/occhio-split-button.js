import React from "react";
// import cx from "clsx";
import PropTypes from "prop-types";
import { DropdownButton } from "@tempestoso/occhio-dropdown-button";
import "../../public/base.css";
import { Button } from "@tempestoso/occhio-button";
// import styles from "./styles.css";

const SplitDropDownButton = ({ btn, splitBtn }) => {
  return (
    <>
      <div style={{ display: "-webkit-box" }}>
        <Button
          {...btn}
          style={{
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
        ></Button>
        <DropdownButton
          style={{
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
          }}
          {...splitBtn}
        ></DropdownButton>
      </div>
    </>
  );
};

SplitDropDownButton.propTypes = {
  btn: PropTypes.shape({
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
  }),
  splitBtn: PropTypes.shape({
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
  }),
};

SplitDropDownButton.defaultProps = {
  btn: {
    backgroundColor: null,
    color: "primary",
    size: "medium",
    variant: "default",
    icon: "la la-chevron-down",
    onClick: undefined,
  },
  splitBtn: {
    backgroundColor: null,
    color: "primary",
    size: "medium",
    variant: "default",
    icon: "la la-chevron-down",
    onClick: undefined,
    items: [
      { label: "My Profile" },
      { label: "Friend Requests" },
      { label: "Account Settings" },
      { label: "Support" },
      { label: "Logout", onClick: () => alert("Clicked !") },
    ],
  },
};

export { SplitDropDownButton };
