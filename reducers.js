const {transcribeDnaToRna} = require("./action");

const transcribeDnaToRnaReducer = function (state = {
  strand: "G"
}, action) {
    if (action.dna === "A") {
        return {strand: "U"};
    }

    if (action.dna === "G") {
        return {strand: "C"};
    }
    return state;
};
module.exports.transcribeDnaToRnaReducer = transcribeDnaToRnaReducer;
