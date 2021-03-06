import React, { useContext } from "react";
import { OrderContext } from "../App";
const Card = (props) => {
  const { currentOrder, setCurrentOrder } = useContext(OrderContext);
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.food.img} alt="food" className="card_img" />
          <div className="card_info">
            <h3 className="card_title">{props.food.title}</h3>
            <span className="card_cat">Price :- {props.food.price}</span>
            <button
              onClick={() => {
                setCurrentOrder(currentOrder.concat(props.food));
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
