module.exports.transcribeRnaToDna = function (state = {strand: "G"}, action) {
    const {strand} = state;
    if (typeof  action !== undefined) {
        return state;
    }
    const {transcribeRnaToDna} = module.exports;
        if (rna.length > 1) {
            return transcribeRnaToDna([0]) + transcribeRnaToDna(strand.slice(1));
        }
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
    if (rna === "C") {
        return {
            strand: "G"
        }
    }
    return state;
} 
