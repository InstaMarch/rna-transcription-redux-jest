test("transcibes cytosine to guanine", function () {
    "use strict";
    store.dispatch(changeToDna("C"));
    expect(store.getState().strand.toEqual("G"));
});
