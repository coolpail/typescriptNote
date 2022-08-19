// 设置只读Array
type List<A = any> = ReadonlyArray<A>

/**
 * Get in 'O' the type of a field of key 'K'
 * exp
 * O = {a: number}  O.a => number
 *
 * 需要考虑数组的情况
 * 同时数组有两种形式 1. 字面量 [1,2,3,4] ; 2. Api声明数组的 string[]
 * 同理对象也是两种  {a: 1} / object
 */

type O<A, K> =
  A extends List
    // 判断是否是string[] 类型的定义
    ? number extends A['length']
      ? K extends number | `${number}`
        // 这里的never 用的很巧妙
        ? A[never] | undefined
        : undefined
      : K extends keyof A ? A[K] : undefined
    // 判断unknown的情况
    : unknown extends A ? unknown
      : K extends keyof A ? A[K] : undefined


// 可以学到的两点：
// 1. 数组和对象定义有两种方式 并且如何去识别；
// 2. never 的使用，never 用于不存在的值 如同key string[] 也就不存在 key;
// type g = string[]; g[never] => string
// 官方定义 The never type represents values which are never observed.  https://www.typescriptlang.org/docs/handbook/2/functions.html#never
// 3. 对对象类型的数据是直接通过A[K] 进行判断