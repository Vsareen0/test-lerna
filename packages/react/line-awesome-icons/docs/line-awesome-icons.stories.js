import React from "react";
import { Icon } from "../lib/line-awesome-icons";

export default {
  title: "Styles/Icons",
  component: Icon,
};

const Template = ({ iconClass, ...args }) => {
  return <Icon iconClass={iconClass} {...args} />;
};

export const Icons = Template.bind({});
Icons.args = {
  iconClass: "la-2x las la-check",
};
