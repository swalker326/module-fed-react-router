import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MicroFrontend } from "./routes/micro-frontend.tsx";
// @ts-expect-error loading remote
import RemoteRoutes from "remote/Routes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "micro-frontend/:appName",
        element: <MicroFrontend />
      },
      ...RemoteRoutes
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
