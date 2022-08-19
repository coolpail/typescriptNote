"use strict";
const makeKeyRemover = (key) => (obj) => {
    return {};
};
// type Omit1<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
const keyRemover = makeKeyRemover(["a", "b"]);
// return {c: 1}
const newObject = keyRemover({ a: 1, b: 2, c: 3 });
newObject.c;
