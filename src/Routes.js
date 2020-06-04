import React from "react";

import ExplorePage from "./stories/Pages/Explore";
import Collection from "./stories/Pages/Collection";
import CollectionDetail from "./stories/Pages/CollectionDetail";
import { Switch, Route } from "react-router-dom";

export default () => (
  <Switch>
    <Route path="/" exact={true} component={ExplorePage} />
    <Route path="/collections" exact={true} component={Collection} />
    <Route path="/collection/:id" exact={true} component={CollectionDetail} />
  </Switch>
);
