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
    if (action.dna === "T") {
        return {strand: "A"};
    }
    if (action.dna === "C") {
        return {strand: "G"};
    }
    return state;
};
module.exports.transcribeDnaToRnaReducer = transcribeDnaToRnaReducer;
