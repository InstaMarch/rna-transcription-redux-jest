const {createStore} = require("redux");
const {transcribeDnaToRnaReducer} = require("./reducers");
let store = createStore(transcribeDnaToRnaReducer);
module.exports.store = store;
