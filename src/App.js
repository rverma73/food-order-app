import React from "react";
import "./App.css";
import Menu from "./Menu";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import History from "./History";
import CurrentOrder from "./CurrentOrder";
const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Menu />}></Route>
          <Route exact path="/histroy" element={<History />}></Route>
          <Route
            exact
            path="/current-orders"
            element={<CurrentOrder />}
          ></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
