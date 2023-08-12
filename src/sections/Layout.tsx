import { Fragment } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  );
}

export default Layout;
