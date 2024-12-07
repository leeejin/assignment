import { Outlet } from "react-router-dom";
import Menubar from "./Menubar";

function Layout() {
  return (
    <>
      <Menubar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
