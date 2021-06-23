import { DropdownButton } from "../lib/occhio-dropdown-button";

export default {
  title: "Buttons/Dropdown",
  component: DropdownButton,
};

const Template = (args) => <DropdownButton {...args}></DropdownButton>;

const myFunc = () => alert("Logout !");

export const Basic = Template.bind({});
Basic.args = {
  label: "Dropdown Button",
  items: [
    { label: "My Profile" },
    { label: "Friend Requests" },
    { label: "Account Settings" },
    { label: "Support" },
    { label: "Logout", onClick: myFunc },
  ],
};
