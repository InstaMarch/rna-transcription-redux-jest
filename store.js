const {createStore} = require("redux");
const {transcribeRnaToDna} = require("./reducer");

module.exports.store = createStore(transcribeRnaToDna);
