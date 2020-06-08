import React from "react";

import ExplorePage from "./stories/Pages/Explore";
import Special from "./stories/Pages/Special";
import RoundTable from "./stories/Pages/RoundTable";
import Column from "./stories/Pages/Column";
import Inspiration from "./stories/Pages/Inspiration";
import Collections from "./stories/Pages/Collections";
import CollectionDetail from "./stories/Pages/CollectionDetail";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./stories/Pages/NotFound";
import Index from "./stories/Pages/Index";
import Profile from "./stories/Pages/Profile";
import MineIndex from "./stories/Pages/MineIndex";
import MineFragments from "./stories/Pages/MineFragments";
import MineCollections from "./stories/Pages/MineCollections";
import MineFavourites from "./stories/Pages/MineFavourites";
import Login from "./stories/Pages/Login/LoginSimple";
import Messages from "./stories/Pages/Messages";
import token from "./utils/token";

export default () => (
  <Switch>
    <Route path="/" exact={true} component={Index} />
    <Route path="/explore" exact={true} component={ExplorePage} />
    <Route path="/special" exact={true} component={Special} />
    {/* <Route path="/favourite" exact={true} component={ExplorePage} /> */}
    <Route path="/roundtable" exact={true} component={RoundTable} />
    <Route path="/column" exact={true} component={Column} />
    <Route path="/collections" exact={true} component={Collections} />
    <Route path="/collection/:id" exact={true} component={CollectionDetail} />
    <Route path="/user/:id" exact={true} component={Profile} />
    <Route path="/login" exact={true} component={Login} />
    <Route path="/inspiration" exact={true} render={({ location }) => token.data ? <Inspiration /> : <Redirect to={{ pathname: "/login", state: { from: location } }} />} />
    <Route path="/mine" exact={true} render={({ location }) => token.data ? <MineIndex /> : <Redirect to={{ pathname: "/login", state: { from: location } }} /> } />
    <Route path="/mine/fragments" exact={true} render={({ location }) => token.data ? <MineFragments /> : <Redirect to={{ pathname: "/login", state: { from: location } }} /> } />
    <Route path="/mine/collections" exact={true} render={({ location }) => token.data ? <MineCollections /> : <Redirect to={{ pathname: "/login", state: { from: location } }} /> } />
    <Route path="/mine/favourites" exact={true} render={({ location }) => token.data ? <MineFavourites /> : <Redirect to={{ pathname: "/login", state: { from: location } }} /> } />
    <Route path="/mine/messages" exact={true} render={({ location }) => token.data ? <Messages /> : <Redirect to={{ pathname: "/login", state: { from: location } }} /> } />
    <Route component={NotFound} />
  </Switch>
);
