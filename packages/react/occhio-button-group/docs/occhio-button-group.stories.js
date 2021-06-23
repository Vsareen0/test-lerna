import React from "react";

import { ButtonGroup } from "../lib/occhio-button-group";

export default {
  title: "Buttons/ButtonGroup",
  component: ButtonGroup,
};

const Template = (args) => <ButtonGroup {...args} />;

export const Icons = Template.bind({});
Icons.args = {
  items: [
    { icon: "la la-bold" },
    { icon: "la la-underline" },
    { icon: "la la-italic" },
  ],
  orientation: "horizontal",
};

export const Labels = Template.bind({});
Labels.args = {
  items: [{ label: "Bold" }, { label: "Underline" }, { label: "Italic" }],
  orientation: "horizontal",
};
