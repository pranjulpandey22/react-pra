import React from "react";
import { useSelector } from "react-redux";
import AccordianItem from "./AccordianItem";
import { useDispatch } from "react-redux";
import { emptyCart } from "../utilis/CartSlice";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartItems);
  // const item = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handelDel = () => {
    console.log("sds");
    dispatch(emptyCart());
  };

  console.log(cartItem, "sdsdsdsdsdsd");
  return (
    <div className="text-center m-4 p-4">
      <h1>Cart Item</h1>
      {cartItem.length === 0 && <h2>Please add Item into a cart</h2>}
      {cartItem.map((ele) => {
        return (
          <>
            <AccordianItem items={ele} isCart={true} />
          </>
        );
      })}
      <button
        className="p-4,m-4 bg-black text-white rounded-lg"
        onClick={handelDel}
      >
        {" "}
        Del all Item
      </button>
    </div>
  );
};
export default Cart;
