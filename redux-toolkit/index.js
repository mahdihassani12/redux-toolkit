const store = require("./app/store");
const cakeActions = require("./features/Cake/cakeSlice").cakeActions

console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() => console.log("Update state, ", store.getState()));

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

unsubscribe();