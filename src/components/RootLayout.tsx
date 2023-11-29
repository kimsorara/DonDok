import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
const RootLayout = () => {
  return (
    <div className="main">
      <Header />
      <main>
        <Outlet />
      </main>
      <Nav />
    </div>
  );
};

export default RootLayout;
