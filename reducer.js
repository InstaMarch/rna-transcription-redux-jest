module.exports.transcribeDnaToRna = function (state = {strand: "G"}, action) {
    if (action.dna === "G") {
        return {
            strand: "C"
        }
    }
    return state;
};
