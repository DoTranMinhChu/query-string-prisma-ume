export type PrismaOrderByType<T = {}> = {
  [K in keyof T]: "asc" | "desc";
};
