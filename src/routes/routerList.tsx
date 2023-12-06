import { createBrowserRouter } from "react-router-dom";
import Calendar from "../pages/Calendar";
import Daily from "../pages/Daily";
import Monthly from "../pages/Monthly";
import Statistics from "../pages/Statistics";
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
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
    ],
  },
]);
