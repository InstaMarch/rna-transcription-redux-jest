module.exports.transcribeRnaToDna = function (state = {strand: "G"}, action) {
    const {rna} = action;
    if (rna === "G") {
        return {
            strand: "C"
        } 
    }
    if (rna === "A") {
        return {
            strand: "U"
        }
    }
    if (rna === "T") {
        return {
            strand: "A"
        }
    }
    return state;
} 
