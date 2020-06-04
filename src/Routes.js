import React from "react";

import ExplorePage from "./stories/Pages/Explore";
import Collection from "./stories/Pages/Collection";
import CollectionDetail from "./stories/Pages/CollectionDetail";
import { Switch, Route } from "react-router-dom";
import NotFound from "./stories/Pages/NotFound";
import Profile from "./stories/Pages/Profile";

export default () => (
  <Switch>
    <Route path="/" exact={true} component={ExplorePage} />
    <Route path="/collections" exact={true} component={Collection} />
    <Route path="/collection/:id" exact={true} component={CollectionDetail} />
    <Route path="/user/:id" exact={true} component={Profile} />
    <Route component={NotFound} />
  </Switch>
);
