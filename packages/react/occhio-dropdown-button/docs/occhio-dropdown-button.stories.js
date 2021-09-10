import { DropdownButton } from "../lib/occhio-dropdown-button";

export default {
  title: "Buttons/Dropdown",
  component: DropdownButton,
};

const Template = (args) => <DropdownButton {...args}></DropdownButton>;

const myFunc = () => alert("Logout !");

export const Basic = Template.bind({});
Basic.args = {
  label: "Dropdown",
  items: [
    { label: "My Profile" },
    { label: "Friend Requests" },
    { label: "Account Settings" },
    { label: "Support" },
    { label: "Logout", onClick: myFunc },
  ],
  iconRight: "las la-angle-down",
};

export const Icon = Template.bind({});
Icon.args = {
  items: [
    { label: "My Profile" },
    { label: "Friend Requests" },
    { label: "Account Settings" },
    { label: "Support" },
    { label: "Logout", onClick: myFunc },
  ],
  icon: "las la-chevron-down la-lg",
};
