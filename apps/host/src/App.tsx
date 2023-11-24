import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/micro-frontend/remoteApp">Remote App</Link>
      <Outlet />
    </>
  );
}

export default App;
