interface fruits {
    apple: number;
    banana: number;
    watermelon: number;
}
declare type keyFromFruits = keyof fruits;
declare type fruitsUnion = {
    [T in keyFromFruits]: {
        [R in T]: fruits[T];
    };
}[keyFromFruits];
declare const myFruits: fruitsUnion;
