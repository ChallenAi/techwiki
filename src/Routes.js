import React from "react";

import ExplorePage from "./stories/Pages/Explore";
import Collections from "./stories/Pages/Collections";
import CollectionDetail from "./stories/Pages/CollectionDetail";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./stories/Pages/NotFound";
import Profile from "./stories/Pages/Profile";
import MineIndex from "./stories/Pages/MineIndex";
import MineFragments from "./stories/Pages/MineFragments";
import MineCollections from "./stories/Pages/MineCollections";
import MineFavourites from "./stories/Pages/MineFavourites";
import Login from "./stories/Pages/Login/LoginSimple";
import Messages from "./stories/Pages/Messages";
import token from "./utils/token";

const PrivateRoute = ({ path, exact, component }) => (
  <Route
    path={path}
    exact={exact}
    render={({ location }) =>
      token.data ? (
        component
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      )
    }
  />
);

export default () => (
  <Switch>
    <Route path="/" exact={true} component={ExplorePage} />
    <Route path="/collections" exact={true} component={Collections} />
    <Route path="/collection/:id" exact={true} component={CollectionDetail} />
    <Route path="/user/:id" exact={true} component={Profile} />
    <Route path="/login" exact={true} component={Login} />
    <PrivateRoute path="/mine" exact={true} component={MineIndex} />
    <PrivateRoute
      path="/mine/fragments"
      exact={true}
      component={MineFragments}
    />
    <PrivateRoute
      path="/mine/collections"
      exact={true}
      component={MineCollections}
    />
    <PrivateRoute
      path="/mine/favourites"
      exact={true}
      component={MineFavourites}
    />
    <PrivateRoute path="/mine/messages" exact={true} component={Messages} />
    <Route component={NotFound} />
  </Switch>
);
