const redux = require('redux') //1

const initialState = { //4
  counter: 0
}

// Reducer
const reducer = (state = initialState, action) => { //3
  if (action.type === "Add_counter") { //7
    return { ...state, counter: state.counter + action.value }

  }
  if (action.type === "Increase_counter") {
    return { ...state, counter: state.counter + 1 }
  }
  return state;
}

// Store
const store = redux.createStore(reducer); //2
console.log(store.getState())

// Action
// action = { //5
//   type: "Add_counter",
//   value: 5
// }

// Subscription //8
store.subscribe( () => {
  console.log("[Subscription]", store.getState());
})

// store.dispatch(action) 
store.dispatch({ type: "Increase_counter" }) //6
console.log(store.getState())
// store.dispatch(action)
console.log(store.getState())

