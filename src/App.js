import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Head from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenuCategories from "./components/RestaurentMenuCategories";
import UserContext from "./Utils/userContext";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./components/Cart";

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
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = "Nikhil Reddy";
    setUserName(data);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <Head />
          <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <Outlet />
          </UserContext.Provider>
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
