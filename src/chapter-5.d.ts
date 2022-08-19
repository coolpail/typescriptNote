declare const myObject: {
    a: number;
    b: number;
    c: number;
};
declare const objectKeys: <Obj>(obj: Obj) => (keyof Obj)[];
