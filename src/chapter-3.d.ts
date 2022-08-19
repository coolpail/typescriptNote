declare const getDeepValue: <Obj, FirstKey extends keyof Obj, SecondKey extends keyof Obj[FirstKey]>(obj: Obj, firstKey: FirstKey, secondKey: SecondKey) => Obj[FirstKey][SecondKey];
declare const obj: {
    foo: {
        a: number;
        b: boolean;
    };
};
declare const res: boolean;
