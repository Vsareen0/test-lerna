import { Fab } from "../lib/occhio-fab";
import React from "react";

export default {
  title: "Buttons/FAB",
  component: Fab,
};

const Template = (args) => <Fab {...args}></Fab>;

const contacts = [
  {
    name: "Mallory Gillian",
    image:
      "https://www.telerik.com/kendo-angular-ui-develop/components/listview/assets/contacts/7.png",
  },
  {
    name: "Mia Coldwell",
    image:
      "https://www.telerik.com/kendo-angular-ui-develop/components/listview/assets/contacts/4.png",
  },
  {
    name: "Darrel Solis",
    image:
      "https://www.telerik.com/kendo-angular-ui-develop/components/listview/assets/contacts/1.png",
  },
];

const CustomItem = ({ item }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "140px",
        justifyContent: "space-between",
        color: "black",
        border: "solid black",
        padding: "10px",
      }}
    >
      <span>{item.name}</span>
      <img width="40" height="40" src={item.image} />
    </div>
  );
};

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

export const Basic = Template.bind({});
Basic.args = {
  icon: "la-2x lab la-rocketchat",
  iconClose: "la-2x las la-times",
  items: contacts,
  item: CustomItem,
  onOpen: handleOpen,
  onClose: handleClose,
  expandTo: "top",
};
