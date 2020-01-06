import React from "react";
import ReactDOM from "react-dom";

import BaseLayout from "./components/baseLayout/baseLayout";
import RandomText from "./components/randomText/randomText";

const element = (
  <BaseLayout>
    <RandomText></RandomText>
  </BaseLayout>
);

ReactDOM.render(element, document.getElementById("root"));
