const transcribeDnaToRnaReducer = (state = {strand: "G"}, action) => {
    if (action !== undefined && action.type === "TRANSCRIBE_DNA_TO_RNA") {
        if (typeof action.dna === "string" && action.dna.length !== 1) {
            const reducedRightStrandAction = Object.assign({}, action, {
                dna: action.dna.slice(1, action.dna.length)
            });
            const reducedLeftSingleStrandAction = Object.assign({}, action, {
                dna: action.dna.slice(0, 1)
            });

            return {
                strand: transcribeDnaToRnaReducer(state, reducedLeftSingleStrandAction).strand
                + transcribeDnaToRnaReducer(state, reducedRightStrandAction).strand
            };
        }
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
    }
    return state;
};

module.exports.transcribeDnaToRnaReducer = transcribeDnaToRnaReducer;
