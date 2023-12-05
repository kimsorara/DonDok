import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import { DateProvider } from "../hook/useDate";

const RootLayout = () => {
  return (
    <div className="main">
      <DateProvider>
        <Header />
        <main>
          <Outlet />
        </main>
      </DateProvider>

      <Nav />
    </div>
  );
};

export default RootLayout;
