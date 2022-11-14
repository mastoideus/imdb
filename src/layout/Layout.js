import React from "react";
import MainNavigation from "./MainNavigation/MainNavigation";

const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <footer></footer>
    </React.Fragment>
  );
};

export default Layout;
