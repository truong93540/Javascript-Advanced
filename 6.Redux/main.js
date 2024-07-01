// import {createStore} from '@reduxjs/toolkit';


// const initState = 0

// // Reducer

// function reducer(state = initState, action){
//     switch (action.type){
//         case 'DEPOSIT':
//             return state + action.payload;
//         case 'WITHDRAW':
//             return state - action.payload;
//         default:
//             return state
//     }
// }

// const store = createStore(reducer)

// console.log(store)

// index.js
const { createStore } = require('redux');

// Khởi tạo state mặc định
const initialState = {
  count: 0
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Tạo store
const store = createStore(reducer);

// Subscribe để theo dõi sự thay đổi của state
store.subscribe(() => {
  console.log(store.getState().count);
});

// Dispatch các action
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
