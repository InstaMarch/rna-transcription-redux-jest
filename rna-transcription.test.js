const {store} = require("./store");
const {transcribeDnaToRna} = require("./action");

test("transcribes cytosine to guanine", function () {
    store.dispatch(transcribeDnaToRna("C"));
    expect(store.getState().strand).toEqual("G");
});

test("transcribes adenine to uracil", function () {
    store.dispatch(transcribeDnaToRna("A"));
    expect(store.getState().strand).toEqual("U");
});

test("transcribes thymine to adenine", function () {
    store.dispatch(transcribeDnaToRna("T"));
    expect(store.getState().strand).toEqual("A");
});

test("transcribes guanine to cytosine", function () {
    store.dispatch(transcribeDnaToRna("G"));
    expect(store.getState().strand).toEqual("C");
});
