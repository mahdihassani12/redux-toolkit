const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReduer = require("../features/Cake/cakeSlice");
const icecreamReduer = require("../features/IceCream/iceCreamSlice");

const store = configureStore({
  reducer: {
    cake: cakeReduer,
    icecream: icecreamReduer,
  },
});

module.exports = store;
