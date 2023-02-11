const { createStore } = require("redux");

const initialState = {
    count:0,
};

const incrementAction = ()=>{
    return {
        type:"INCREMENT",
    }
}

const countreReducer = (state=initialState,action)=>{
    if(action.type==="INCREMENT"){
        return {
            count : state.count + 1,
        }
    }
};

const store = createStore(countreReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementAction());