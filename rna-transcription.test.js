const {store} = require("./store");
const {transcribeDnaToRna} = require("./action");

test("transcribes cytosine to guanine", function () {
    store.dispatch(transcribeDnaToRna("C"));
    expect(store.getState().strand).toEqual("G");
});

