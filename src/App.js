import React, { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import History from "./History";
import CurrentOrder from "./CurrentOrder";
export const OrderContext = React.createContext();
const App = () => {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);
  return (
    <>
      <OrderContext.Provider
        value={{ currentOrder, setCurrentOrder, pastOrders, setPastOrders }}
      >
        <Navbar />

        <>
          <Routes>
            <Route exact path="/" element={<Menu />}></Route>
            <Route exact path="/histroy" element={<History />}></Route>
            <Route
              exact
              path="/current-orders"
              element={<CurrentOrder />}
            ></Route>
          </Routes>
        </>
      </OrderContext.Provider>
    </>
  );
};

export default App;
