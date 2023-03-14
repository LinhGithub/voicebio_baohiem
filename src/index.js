import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import Routers from "Routers";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routers></Routers>
  </BrowserRouter>
);
