const {transcribeDnaToRna} = require("./action");

const transcribeDnaToRnaReducer = function (state = {
  strand: "G"
}, action) {
    if (action.dna === "A") {
        return {strand: "U"};
    }

    return state;
};
module.exports.transcribeDnaToRnaReducer = transcribeDnaToRnaReducer;
