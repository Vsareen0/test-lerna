import React from "react";

import { Button } from "@tempestoso/occhio-button";
import { ButtonGroup } from "../lib/occhio-button-group";

export default {
  title: "Buttons/ButtonGroup",
};

export const Group = () => (
  <ButtonGroup orientation="horizontal">
    <Button icon={"la la-bold"} />
    <Button icon={"la la-underline"} />
    <Button icon={"la la-italic"} />
  </ButtonGroup>
);
