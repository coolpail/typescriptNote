declare type List<A = any> = ReadonlyArray<A>;
/**
 * Get in O the type of field of key 'K'
 * exp
 * O = {a: number}  O.a => number
 *
 * 需要考虑数组的情况
 * 同时数组有两种形式 1. 字面量 [1,2,3,4] ; 2. Api声明数组的 string[]
 * 同理对象也是两种  {a: 1} / object
 */
declare type Key = string | number | symbol;
declare type At<A extends any, K extends Key> = A extends List ? number extends A['length'] ? K extends number | `${number}` ? A[never] | undefined : undefined : K extends keyof A ? A[K] : undefined : unknown extends A ? unknown : K extends keyof A ? A[K] : undefined;
declare type l1 = [1, 2, 3, 4];
declare type l2 = number[];
declare type h = l1['length'];
declare type obj = {
    p: {
        g: number;
        h: string;
    };
    a: string;
};
declare type a = At<l1, 2>;
