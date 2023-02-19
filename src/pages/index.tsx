import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import NotFound from "./Root/NotFound";
import Home from "./Root/Home";
import Share from "./Root/Share";
import Sight from "./Root/Sight";
import Tech from "./Root/Tech";
import More from "./Root/More";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    // loader: rootLoader,
    // action: rootAction,
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
