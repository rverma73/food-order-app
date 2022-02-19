import React, { useContext } from "react";
import { OrderContext } from "./App";
const History = () => {
  const { pastOrders, setPastOrders } = useContext(OrderContext);
  return (
    <>
      <h1>History</h1>
      {pastOrders.map((foodOrder, idx) => {
        return (
          <div key={idx}>
            <hr />
            {foodOrder.map((foodItem) => {
              return <h2 key={foodItem.id}>{foodItem.title}</h2>;
            })}
          </div>
        );
      })}
      <button
        onClick={() => {
          setPastOrders([]);
        }}
      >
        Delete History
      </button>
    </>
  );
};

export default History;
