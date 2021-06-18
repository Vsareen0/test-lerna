import React from "react";

import { Button } from "../lib/occhio-button";

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const Template = (args) => <Button disabled={true} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Flat = Template.bind({});
Flat.args = {
  size: "medium",
  label: "Button",
  variant: "flat",
};

export const Outlined = Template.bind({});
Outlined.args = {
  size: "medium",
  label: "Button",
  variant: "outline",
};

export const Icon = Template.bind({});
Icon.args = {
  size: "medium",
  icon: "la-1x las la-exclamation-triangle",
};
