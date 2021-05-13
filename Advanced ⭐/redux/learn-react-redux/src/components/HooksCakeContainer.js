import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.noOfCakes);
  const numOfIceCreams = useSelector((state) => state.icecream.noOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No of cakes {numOfCakes}</h2>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        Buy Cake
      </button>
      <h2>No of IceCreams {numOfIceCreams}</h2>
      <button
        onClick={() => {
          dispatch(buyIceCream());
        }}
      >
        Buy IceCreams
      </button>
    </div>
  );
}

export default HooksCakeContainer;
