module.exports.transcribeRnaToDna = function (state = {strand: "G"}, action) {
    const {rna} = action; 
    const {strand} = state;
    if (rna === "G") {
        return {
            strand: "C"
        } 
    }
    return state;
} 
