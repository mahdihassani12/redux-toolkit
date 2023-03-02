const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReduer = require("../features/Cake/cakeSlice");

const store = configureStore({
  reducer: {
    cake: cakeReduer,
  },
});

module.exports = store;
