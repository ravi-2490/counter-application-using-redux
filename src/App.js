import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
const { createStore } = require("redux");

const initialState = {
  count: 0,
  pageCount: [0],
};

const incrementAction = () => {
  return {
    type: "INCREMENT",
  }
}

const decrementAction = () => {
  return {
    type: "DECREMENT",
  }
};

const resetAction = () => {
  return {
    type: "RESET",
  }
};

const countreReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    }
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    }
  } else if (action.type === "RESET") {
    return {
      count: 0,
    }
  }else{
    return {
      count : 0,
    }
  }
};

const store = createStore(countreReducer);

const App = () => {
  const handleIncrementClick = (screen)=>{
    store.dispatch(incrementAction());
    screen.innerText = store.getState().count;
  }
  return (
    <div className="main-container">
      <div className="inner-container">
          <br/>
          <h1>The count value is <span id="countDisplay">{store.getState().count}</span></h1>
          <br/>
          <Button onClick={()=>{
            const screen = document.getElementById("countDisplay");
            handleIncrementClick(screen)
          }} >Increment</Button>
          <br/>
          <Button onClick={()=>{
            if(store.getState().count===0){
              alert("Decrement is not possible");
            }else{
              const screen = document.getElementById("countDisplay");
              store.dispatch(decrementAction());
              screen.innerText = store.getState().count;
            }
          }}>Decrement</Button>
          <br/>
          <Button
            onClick={()=>{
              store.dispatch(resetAction());
              const screen = document.getElementById("countDisplay");
              screen.innerText = store.getState().count;
            }}
          >Reset</Button>
      </div>
    </div>
  )
};

export default App;