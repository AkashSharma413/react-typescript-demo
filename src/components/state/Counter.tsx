import React, { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateCounter = {
  type: "Increment" | "Decrement",
  payload: number  
}

type ResetCounter = {
  type: "Reset"
}

type CounterAction = UpdateCounter | ResetCounter

const intitialState = {
  count: 0,
};

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };
    case "Reset":
      return intitialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, intitialState);
  return (
    <>
      Count: {state.count};
      <button onClick={() => dispatch({ type: "Increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "Decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </>
  );
};

export default Counter;
