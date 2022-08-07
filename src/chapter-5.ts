const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

// 为什么报错应该是这边传入的key 应该需要 a | b | c
// Object.keys(myObject).forEach((key) => console.log(myObject[key]));

// what can i do

const objectKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[];
};

// this key is a | b |c
objectKeys(myObject).forEach((key) => {
  console.log(myObject[key]);
});
