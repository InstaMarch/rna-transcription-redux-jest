module.exports.transcribeDnaToRnaReducer = (state = {strand: "G"}, action) => {
    if (action.dna === "A") {
        return {
	    strand: "U"
	}
    }

    if (action.dna === "T") {
        return {
	    strand: "A"
	}
    }

    return state;
}; 
