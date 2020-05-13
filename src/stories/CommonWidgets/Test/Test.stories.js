import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Test",
};

export const TestButton = () => (
  <button onClick={action("clicked")}>Hello</button>
);
