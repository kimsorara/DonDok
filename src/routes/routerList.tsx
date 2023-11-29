import { createBrowserRouter } from "react-router-dom";
import Calendar from "../pages/Calendar";
import Daily from "../pages/Daily";
import Monthly from "../pages/Monthly";
import Yearly from "../pages/Yearly";
import RootLayout from "../components/RootLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Daily /> },
      {
        path: "month",
        element: <Monthly />,
      },
      {
        path: "year",
        element: <Yearly />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
    ],
  },
]);
