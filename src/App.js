import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./components/Header";
import Body from "./components/Body";

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

const AppLayout = () => {
  return (
    <div className="app">
      <Head />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
