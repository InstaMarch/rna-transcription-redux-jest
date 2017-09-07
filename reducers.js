module.exports.transcribeDnaToRnaReducer = (state = {strand: "G"}, action) => {
    if (action.dna === "A") {
        return {
	    strand: "U"
	}
    }

    return state;
}; 
