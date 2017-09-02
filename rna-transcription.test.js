const {store} = require("./store");
const {rnaToDna} = require("./action");

test("transcibes cytosine to guanine", function () {
    "use strict";
    store.dispatch(rnaToDna("C"));
    expect(store.getState().strand).toEqual("G");
});
