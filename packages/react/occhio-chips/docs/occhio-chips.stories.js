import React from "react";
import { Chips } from "../lib/occhio-chips";

export default {
  title: "Buttons/Chips",
  component: Chips,
};

const Template = ({ label, ...args }) => <Chips {...args}>{label}</Chips>;

export const Primary = Template.bind({});
Primary.args = {
  filled: true,
  icon: "la la-circle",
  label: "Chip Component",
};

export const Success = Template.bind({});
Success.args = {
  filled: true,
  icon: "la la-circle",
  label: "Chip Component",
  success: true,
};

export const Warning = Template.bind({});
Warning.args = {
  filled: true,
  icon: "la la-circle",
  label: "Chip Component",
  warning: true,
};

export const Danger = Template.bind({});
Danger.args = {
  filled: true,
  icon: "la la-circle",
  label: "Chip Component",
  danger: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  filled: true,
  icon: "la la-circle",
  label: "Chip Component",
  disabled: true,
};

export const Removable = Template.bind({});
Removable.args = {
  filled: true,
  label: "Chip Component",
  removable: true,
  removeIcon: "las la-trash",
};
