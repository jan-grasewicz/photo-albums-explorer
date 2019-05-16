import React from "react";
import ReactDOM from "react-dom";
import AppContextProvider from "./contexts/AppContext";
import Root from "./components/Root/Root";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <AppContextProvider>
    <Root />
  </AppContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
