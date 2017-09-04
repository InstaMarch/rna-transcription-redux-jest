const {createStore} = require("redux");
const {transcribeDnaToRnaReducer} = require("./reducers");

module.exports.store = createStore(transcribeDnaToRnaReducer);
