"use strict";
const myFruits = {
    apple: 123,
};
//what i learn
// 1. {a: A, b: B,c: C}[A|B|C] ==> A | B | C
// 2. in 关键词 除了类型保护，还有很重要的功能就是遍历联合类型
/// exp:
// interface A {
//   x: number;
// }
// interface B {
//   y: string;
// }
// let q: A | B = ...;
// if ('x' in q) {
//   // q: A
// } else {
//   // q: B
// }
// interface Person {
//     name: string;
//     age: number;
// }
// type Partial<T> = {
//     [P in keyof T]?: T[P]; // P will be each key of T
// }
// type PersonPartial = Partial<Person>; // same as { name?: string;  age?: number; }
