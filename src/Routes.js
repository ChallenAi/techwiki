import React from "react";

import ExplorePage from "./stories/Pages/Explore";
import Collection from "./stories/Pages/Collection";
import { Switch, Route } from "react-router-dom";

export default () => (
  <Switch>
    <Route path="/" exact={true} component={ExplorePage} />
    <Route path="/collection" exact={true} component={Collection} />
  </Switch>
);
