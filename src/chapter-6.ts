const makeKeyRemover =
  <Key extends string>(key: Key[]) =>
  <Obj>(obj: Obj): Omit<Obj, Key> => {
    return {} as any;
  };
// type Omit1<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
const keyRemover = makeKeyRemover(["a", "b"]);

// return {c: 1}
const newObject = keyRemover({ a: 1, b: 2, c: 3 });

newObject.c;
