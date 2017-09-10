const TRANSCRIBE_DNA_TO_RNA = "TRANSCRIBE_DNA_TO_RNA";
const transcribeDnaToRna = (dna) => (
    {
        type: TRANSCRIBE_DNA_TO_RNA,
        dna
    }
);

module.exports.transcribeDnaToRna = transcribeDnaToRna;
