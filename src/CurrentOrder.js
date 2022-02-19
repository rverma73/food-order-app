import React, { useContext } from "react";
import { OrderContext } from "./App";
const CurrentOrder = () => {
  const { currentOrder, setCurrentOrder, pastOrders, setPastOrders } =
    useContext(OrderContext);
  return (
    <>
      <h1>Current-Order</h1>
      {currentOrder.map((foodItem) => {
        return (
          <span>
            <h2>{foodItem.title}</h2>
            <h3>{foodItem.price}</h3>
          </span>
        );
      })}
      <button
        onClick={() => {
          setPastOrders(pastOrders.concat([currentOrder]));
          setCurrentOrder([]);
        }}
      >
        Confirm order
      </button>
    </>
  );
};

export default CurrentOrder;
