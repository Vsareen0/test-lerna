import { SplitDropDownButton } from "../lib/occhio-split-button";

export default {
  title: "Buttons/Split Button",
  component: SplitDropDownButton,
};

const Template = (args) => (
  <SplitDropDownButton {...args}></SplitDropDownButton>
);

export const Basic = Template.bind({});
Basic.args = {
  btn: {
    label: "Dropdown",
    // iconRight: "la la-chevron-down",
  },
  splitBtn: {
    icon: "la la-chevron-down",
    items: [
      { label: "My Profile" },
      { label: "Friend Requests" },
      { label: "Account Settings" },
      { label: "Support" },
      { label: "Logout", onClick: () => alert("Clicked !") },
    ],
  },
};
