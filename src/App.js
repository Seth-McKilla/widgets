import React from "react";
// import Accordion from "./components/Accordion";
import Search from "./components/Search";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front end javascript framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite among JS engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "React is built upon components and state",
//   },
// ];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
