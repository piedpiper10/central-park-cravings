import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Head from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenuCategories from "./components/RestaurentMenuCategories";

/**
 * Header
 *  - Logo
 * - nav ietms
 * Body
 *  - serach
 * -Restaurant Container
 *   - Restaurant card
 *   -img
 *   - Name of Res, Start Rating, cuisine, delivery time etc
 *
 * Footer
 *  -copyright
 * - links
 * -address
 **/

//not using keys (not acceptable) <<< index as key <<<< uniaue id(best practice)

//chunking
// code splitting
//dynamic bundling
//LAZY Loading on demand loading
//dynamic import

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Head />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurents/:resId", //dynamic path resId is dynamic here
        element: <RestaurentMenuCategories />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loadding...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
