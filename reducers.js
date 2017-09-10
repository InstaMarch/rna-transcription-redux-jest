const transcribeDnaToRnaReducer = (state = {strand: "Q"}, action) => {
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
    }
module.exports.transcribeDnaToRnaReducer = transcribeDnaToRnaReducer;
