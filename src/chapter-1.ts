interface fruits {
    apple: number,
    banana: number,
    watermelon: number
}

// 转变成
// type fruitsUnion = {
//   apple: number
// } | {
//   banana: number
// } | {
//   watermelon: number
// }

// what should i do ?? hh

type keyFromFruits = keyof fruits;

type fruitsUnion = {
    [T in keyFromFruits]: {
        // 如果 单纯用 key  返回的key , 如果用 [key] 会报错显示不能用 type to value
        // 所以 这边使用in 关键词 可以将key的value 值当作 key 类型
        [R in T]: fruits[T]
    }
}[keyFromFruits]

const myFruits: fruitsUnion = {
    apple:123,
}
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