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


