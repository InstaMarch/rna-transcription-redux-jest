const {transcribeDnaToRna} = require("./action");

const transcribeDnaToRnaReducer = function (state = {
  strand: "G"
}, action) {
    if(action && action.dna && action.dna.length > 1) {
        const singleItemStrand = transcribeDnaToRnaReducer(state, transcribeDnaToRna(action.dna.slice(0, 1))).strand;
        const manyItemStrand =  transcribeDnaToRnaReducer(state, transcribeDnaToRna(action.dna.slice(1, action.dna.length))).strand;
        return {
            strand:  singleItemStrand + manyItemStrand
        }
    }
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
