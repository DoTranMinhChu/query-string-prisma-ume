type PrismaField = string;

type ExcludeStringAndNumberKeys<T> = {
  [key in keyof T]?: T[key] extends object
    ? PrismaSelectType<T[key]> | "$all"
    : PrismaSelectType<T> | string[] | "$all";
};
export type PrismaSelectType<T = {}> = (
  | "$all"
  | keyof T
  | ExcludeStringAndNumberKeys<T>
)[];
