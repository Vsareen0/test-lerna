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

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "Button",
};

export const Success = Template.bind({});
Success.args = {
  color: "success",
  label: "Button",
  iconLeft: "lar la-check-circle",
};

export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
  // color: "primary",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
  // color: "primary",
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

export const Disabled = Template.bind({});
Disabled.args = {
  size: "medium",
  label: "Button",
  disabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
  size: "medium",
  icon: "la-1x las la-exclamation-triangle",
};

export const Loading = Template.bind({});
Loading.args = {
  size: "medium",
  label: "Loading Button",
  loading: true,
};
