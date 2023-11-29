import { Outlet } from "react-router-dom";

import Nav from "./Nav";
import Header from "./Header";
const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Nav />
    </>
  );
};

export default RootLayout;
