type AllowedKeys =
  | "equals"
  | "not"
  | "in"
  | "notIn"
  | "lt"
  | "lte"
  | "gt"
  | "gte"
  | "contains"
  | "startsWith"
  | "endsWith"
  | "notContains"
  | "notStartsWith"
  | "notEndsWith";

type PrismaWhereConditionTypeBase = {
  [K in AllowedKeys]?: any;
};

export type PrismaWhereConditionType = PrismaWhereConditionTypeBase & {
  AND?: PrismaWhereConditionType[];
  OR?: PrismaWhereConditionType[];
  NOT?: PrismaWhereConditionType[];
} & {
  [key: string]: PrismaWhereConditionType | string | number;
};
