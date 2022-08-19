declare const makeKeyRemover: <Key_1 extends string>(key: Key_1[]) => <Obj>(obj: Obj) => Omit<Obj, Key_1>;
declare const keyRemover: <Obj>(obj: Obj) => Omit<Obj, "b" | "a">;
declare const newObject: Omit<{
    a: number;
    b: number;
    c: number;
}, "b" | "a">;
