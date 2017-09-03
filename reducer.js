module.exports.transcribeDnaToRna = function (state = {strand: "G"}, action) {
    if (action.dna === "G") {
        return {
            strand: "C"
        }
    }
    if(action.dna === "A") {
      return {
          strand: "U"
      }
    }
    if(action.dna === "T") {
        return {
            strand: "A"
        }
    }
    return state;
};
