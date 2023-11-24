// import { Suspense } from "react";
// import {
//   __federation_method_setRemote,
//   __federation_method_getRemote
//   //@ts-expect-error this is there at run time.
// } from "__federation__";
import { useNavigate, useRoutes } from "react-router-dom";
// @ts-expect-error loading remote
// import Remote from "remote/App";
// @ts-expect-error loading remote
import RemoteRoutes from "remote/Routes";
console.log("RemoteRoutes", RemoteRoutes);

export const MicroFrontend = () => {
  const routes = useRoutes(RemoteRoutes);
  const navigate = useNavigate();
  console.log("MFE useNavigation", navigate);
  // const { appName } = useParams();

  // const Comp = useMemo(
  //   () =>
  //     lazy(() => {
  //       __federation_method_setRemote("remoteApp", {
  //         url: () =>
  //           Promise.resolve("http://localhost:3001/assets/remoteEntry.js"),
  //         format: "esm",
  //         from: "vite"
  //       });

  //       return __federation_method_getRemote("remoteApp", "./App");
  //     }),
  //   []
  // );
  return (
    <div>
      <h1>Dynamic Micro Frontend</h1>
      {/* <Remote /> */}
      {routes}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Comp />
      </Suspense> */}
    </div>
  );
};
