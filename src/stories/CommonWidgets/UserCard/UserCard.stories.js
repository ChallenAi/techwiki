import React from "react";
import CardSimple from "./CardSimple";
import UsernameCarded from "./UsernameCarded";
import Card from "../Card/Card";

export default {
  title: "Widgets.UserCard",
};

export const UserCard = () => (
  <div style={{ margin: "80px 200px" }}>
    <CardSimple />
  </div>
);

export const UsernameWithCard = () => (
  <div style={{ margin: "280px 300px" }}>
    <Card boxStyles={{ width: 200, padding: "44px 46px 42px" }}>
      <UsernameCarded boxStyles={{}} username="Challen" />
    </Card>
  </div>
);
