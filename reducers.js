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

    if (action.dna === "C") {
        
	return {
	    strand: "G"
	}
    }
    
    if (action.dna === "G") {
        return {
	    strand: "C"
	}
    }

    return state;
}; 
