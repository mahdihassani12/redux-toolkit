const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReduer = require("../features/Cake/cakeSlice");
const icecreamReduer = require("../features/IceCream/iceCreamSlice");
const usersReducer = require("../features/Users/UsersSlice");

const store = configureStore({
  reducer: {
    cake: cakeReduer,
    icecream: icecreamReduer,
    users: usersReducer,
  },
});

module.exports = store;
