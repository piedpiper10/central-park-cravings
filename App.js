import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namste React"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
]); //ugly code so hard to read this stuff

//then something known as JSX existss which makes our life easy

//doing core thing
//third argument takes whatever we need to put inside h1
const heading = React.createElement(
  "h1",
  { id: "heading1" },
  "Hello World from React!"
);

console.log(heading); //return js object
//{} attributes of the tag given in this object

//putting element into the DOM creating root
const root = ReactDOM.createRoot(document.getElementById("header"));

//everything we render we render inside the root
root.render(parent); //render function takes this object convert into headig put it upon a DOM

//react element at the end of the day is object it's become an html that browser understands

console.log("parent", parent);
