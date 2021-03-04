import React from "react";

import CollectionDetailPlainPage from "./index";

export default {
  title: "Pages",
};

export const CollectionDetailPlain = () => <CollectionDetailPlainPage match={{params: {id: "3"}}} />;
