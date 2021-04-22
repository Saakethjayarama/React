import React from "react";
import { buyCake } from "../redux";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
  const { noOfCakes, noOfIcecreams } = props;
  return (
    <div>
      <h2>Number of cakes {noOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <h2>Number of Ice Creams {noOfIcecreams}</h2>
      <button onClick={props.buyIceCream}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
    noOfIcecreams: state.icecream.noOfIcecreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
