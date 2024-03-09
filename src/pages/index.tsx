import { createBrowserRouter } from "react-router-dom";
import Root from "../app/Layout";
import NotFound from "./NotFound";
import Home from "./Home";
import Share from "./Share";
import Sight from "./Sight";
import Tech from "./Tech";
import More from "./More";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "tech",
            element: <Tech />,
          },
          {
            path: "sight",
            element: <Sight />,
          },
          {
            path: "share",
            element: <Share />,
          },
          {
            path: "more",
            element: <More />,
          },
        ],
      },
    ],
  },
]);
