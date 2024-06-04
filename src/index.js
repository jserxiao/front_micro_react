import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes, { basename: "/subreact" });

const root = ReactDOM.createRoot(document.getElementById("subroot"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
