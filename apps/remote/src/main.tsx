import App from "./App.tsx";
import { useRoutes, useLoaderData } from "react-router-dom";

export const Test = () => {
  const loaderData = useLoaderData();
  return <div>Hi {JSON.stringify(loaderData)}</div>;
};

export default function Main() {
  console.log("pathname: ", window.location.pathname);
  const element = useRoutes(
    [
      {
        path: "/",
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
    ],
    { pathname: window.location.pathname }
  );
  console.log("element", element);
  return element;
}
