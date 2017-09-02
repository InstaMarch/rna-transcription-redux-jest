const {store} = require("./store");
const {rnaToDna} = require("./action");

test("transcibes cytosine to guanine", function () {
    "use strict";
    store.dispatch(rnaToDna("C"));
    expect(store.getState().strand).toEqual("G");
});

test("transcribes guanine to cytosine", function () {
    "use strict";
    store.dispatch(rnaToDna("G"));
    expect(store.getState().strand).toEqual("C");
});

test("transcribes adenine to uracil", function () {
    "use strict";
    store.dispatch(rnaToDna("A"));
    expect(store.getState().strand).toEqual("U");
});

test("transcribes thymine to adenine", function () {
    "use strict";
    store.dispatch(rnaToDna("T"));
    expect(store.getState().strand).toEqual("A");
});
