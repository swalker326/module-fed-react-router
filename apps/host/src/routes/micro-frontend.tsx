import { lazy, Suspense, useMemo } from "react";
import {
  __federation_method_setRemote,
  __federation_method_getRemote
  //@ts-expect-error this is there at run time.
} from "__federation__";
import { useParams } from "react-router-dom";

export const MicroFrontend = () => {
  const { appName } = useParams();

  const Comp = useMemo(
    () =>
      lazy(() => {
        __federation_method_setRemote(appName, {
          url: () =>
            Promise.resolve("http://localhost:3001/assets/remoteEntry.js"),
          format: "esm",
          from: "vite"
        });

        return __federation_method_getRemote(appName, "./App");
      }),
    [appName]
  );
  return (
    <div>
      <h1>Dynamic Micro Frontend</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Comp />
      </Suspense>
    </div>
  );
};
