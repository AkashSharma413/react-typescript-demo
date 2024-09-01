import React, { useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

const intitialState = {
  count: 0,
};

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };
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
    </>
  );
};

export default Counter;
