"use strict";
// 可以学到的两点：
// 1. 数组和对象定义有两种方式 并且如何去识别；
// 2. never 的使用，never 用于不存在的值 如同key string[] 也就不存在 key;
// type g = string[]; g[never] => string
// 官方定义 The never type represents values which are never observed.  https://www.typescriptlang.org/docs/handbook/2/functions.html#never
// 3. 对对象类型的数据是直接通过A[K] 进行判断
