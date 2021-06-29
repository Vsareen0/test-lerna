import { Animation } from "../lib/occhio-animations";
import { Button } from "@tempestoso/occhio-button";
import { useState } from "react";

export default {
  title: "Styles/Animations",
  component: Animation,
};

const Template = (args) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Button
        label="Button"
        color="outline"
        onClick={() => setToggle(!toggle)}
      ></Button>
      <Animation mode={toggle} {...args}>
        <div style={{ marginTop: "10px" }}>Hey, wass up ?!</div>
      </Animation>
    </>
  );
};

export const Fade = Template.bind({});
Fade.args = {
  type: "fade",
};

export const Slide = Template.bind({});
Slide.args = {
  type: "slide-y",
};
