"use strict";
const getDeepValue = (obj, firstKey, secondKey) => {
    return obj[firstKey][secondKey];
};
const obj = {
    foo: { a: 1, b: true },
};
const res = getDeepValue(obj, "foo", "b");
