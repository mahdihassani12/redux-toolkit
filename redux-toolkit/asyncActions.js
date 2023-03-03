const store = require("./app/store");
const fetchUsers = require("./features/Users/UsersSlice").fetchUsers;

console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Update state, ", store.getState())
);

store.dispatch(fetchUsers());
