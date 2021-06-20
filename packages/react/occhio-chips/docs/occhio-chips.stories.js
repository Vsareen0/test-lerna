import React from "react";
import { Chips } from "../lib/occhio-chips";

export default {
  title: "Buttons/Chips",
  component: Chips,
};

const Template = ({ label, ...args }) => <Chips {...args}>{label}</Chips>;

export const Chip = Template.bind({});
Chip.args = {
  filled: true,
  icon: "la la-circle",
  label: "Chip Component",
};
