const {store} = require("./store");
const {transcribeDnaToRna} = require("./action");

test("Transcribes cytosine to guanine", function () {
    store.dispatch(transcribeDnaToRna("C"));
    expect(store.getState().strand).toEqual("G");
});

test("Transcribes adenine to uracil", function () {
    store.dispatch(transcribeDnaToRna("A"));
    expect(store.getState().strand).toEqual("U");
});
