const {store} = require("./store");
const {dnaToRna} = require("./action");

test("transcribes cytosine to guanine", function () {
    store.dispatch(dnaToRna("C"));
    expect(store.getState().strand).toEqual("G");
});

test("transcribes guanine to cytosine", function () {
    store.dispatch(dnaToRna("G"));
    expect(store.getState().strand).toEqual("C");
});

test("transcribes adenine to uracil", function () {
    store.dispatch(dnaToRna("A"));
    expect(store.getState().strand).toEqual("U");
});

test("transcribes thymine to adenine", function () {
  store.dispatch(dnaToRna("T"));
  expect(store.getState().strand).toEqual("A");
});
