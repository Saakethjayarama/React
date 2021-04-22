export const increment = (inc = 1) => {
  return {
    type: "INCREMENT",
    payload: inc,
  };
};

export const decrement = (dec = 1) => {
  return {
    type: "DECREMENT",
    payload: dec,
  };
};

export const log = () => {
  return {
    type: "SIGNIN",
  };
};
