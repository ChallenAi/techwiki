import React from "react";
import CardSimple from "./CardSimple";
import UsernameCarded from "./UsernameCarded";
import Username from "./Username";
import Card from "../Card/Card";

export default {
  title: "Widgets.UserCard",
};

export const UserCard = () => (
  <div style={{ margin: "80px 200px" }}>
    <CardSimple userId="1" />
  </div>
);

export const UsernameWithCard = () => (
  <div style={{ margin: "280px 300px" }}>
    <Card boxStyles={{ width: 200, padding: "44px 46px 42px" }}>
      <UsernameCarded userId="1" boxStyles={{}} username="Challen" />
    </Card>
  </div>
);

export const UsernameSimple = () => (
  <div style={{ margin: "280px 300px" }}>
    <Card boxStyles={{ width: 200, padding: "44px 46px 42px" }}>
      <Username userId="1" boxStyles={{}} username="Challen" />
    </Card>
  </div>
);
