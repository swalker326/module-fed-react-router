import App from "./App";
import { Test } from "./main";

const routes = [
  {
    path: "/ui/my-remote-app",
    element: <App />,
    children: [
      {
        path: "test",
        element: <Test />,
        loader: () => {
          console.log("Hello from remote app loader");
          return { data: "some route data boyyeee" };
        }
      }
    ]
  }
];

export default routes;
