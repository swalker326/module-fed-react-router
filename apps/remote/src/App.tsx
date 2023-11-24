import {
  Link,
  useInRouterContext,
  useNavigation,
  Outlet
} from "react-router-dom";
export default function App() {
  console.log("In router context?", useInRouterContext());
  const loc = useNavigation();
  console.log(loc);
  return (
    <>
      <h1>Remote App</h1>
      <Link to="/ui/my-remote-app/test">Test</Link>
      <Outlet />
    </>
  );
}
