import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact.jsx";

import MenuPage from "./components/MenuPage.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
     errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
        {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/contacts",
        element: <Contact/>,
      },

       {
        path: "/menu/:id",
    element: <MenuPage/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
