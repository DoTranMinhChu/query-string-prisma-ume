type ArrayOfObjects<T> = T extends Array<infer E>
  ? E extends object
    ? T
    : never
  : never;

type ExcludeStringAndNumberKeys<T> = {
  [key in keyof T]?: T[key] extends Array<infer E>
    ? E extends object
      ? PrismaSelectType<E> | (keyof ArrayOfObjects<E>)[]
      : E
    : T[key] extends object
    ? PrismaSelectType<T[key]> | "$all"
    : T[key] extends string | number | boolean
    ? T[key]
    : PrismaSelectType<T> | "$all";
};

export type PrismaSelectType<T = {}> = (
  | "$all"
  | keyof T
  | ExcludeStringAndNumberKeys<T>
)[];
