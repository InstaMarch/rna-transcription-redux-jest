const {createStore} = require("redux");
const {transcribeDnaToRna} = require("./reducer");

module.exports.store = createStore(transcribeDnaToRna);
