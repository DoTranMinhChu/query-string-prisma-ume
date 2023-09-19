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
  | "notEndsWith"
  | "has";

type FilterCondition = {
  [K in AllowedKeys]?:
    | string
    | number
    | object
    | string[]
    | number[]
    | object[];
} & {
  mode?: "default" | "insensitive";
};

/**
 * A generic object type representing filter conditions for Prisma queries.
 * This type includes a set of allowed filter keys, such as 'equals', 'not', 'in', 'notIn', etc.,
 * which can be used to build complex filtering conditions.
 *
 * Additionally, when working with scalar lists (arrays), you can use the 'some' filter condition
 * to check if at least one element in the list meets a specific condition.
 *
 * @example
 * const whereCondition1: PrismaWhereConditionType = {
 *  field1: {
 *    equals: "value1",
 *    not: { startsWith: "prefix" },
 *  },
 *  tags: {
 *    some: {
 *      equals: "databases",  
 *    },
 *  }
 * };
 *
 * const whereCondition2: PrismaWhereConditionType = {
 *   OR: [
 *     { field2: { contains: "text" } },
 *     { field3: { in: [1, 2, 3] } },
 *   ],
 *   AND: [
 *     { field4: { gte: 10 } },
 *     { field5: { lt: 20 } },
 *   ],
 * };

 * @type {object} PrismaWhereConditionType
 * @property {string | number | object | string[] | number[] | object[]} [equals] - Equality condition.
 * @property {object} [not] - Negation condition.
 * @property {string[] | number[] | object[]} [in] - Inclusion condition.
 * @property {string[] | number[] | object[]} [notIn] - Exclusion condition.
 * @property {string | number} [lt] - Less than condition.
 * @property {string | number} [lte] - Less than or equal to condition.
 * @property {string | number} [gt] - Greater than condition.
 * @property {string | number} [gte] - Greater than or equal to condition.
 * @property {string} [contains] - Contains condition.
 * @property {string} [startsWith] - Starts with condition.
 * @property {string} [endsWith] - Ends with condition.
 * @property {string} [notContains] - Negated contains condition.
 * @property {string} [notStartsWith] - Negated starts with condition.
 * @property {string} [notEndsWith] - Negated ends with condition.
 * @property {string | number} [has] - Relationship existence condition.
 * @property {"default" | "insensitive"} [mode] - Case sensitivity mode.
 * @property {PrismaWhereConditionType[]} [AND] - Logical AND condition.
 * @property {PrismaWhereConditionType[]} [OR] - Logical OR condition.
 * @property {PrismaWhereConditionType[]} [NOT] - Logical NOT condition.
 */
export type PrismaWhereConditionType = {
  [key: string]:
    | FilterCondition
    | string
    | number
    | object
    | string[]
    | number[]
    | object[];
} & {
  AND?: PrismaWhereConditionType[];
  OR?: PrismaWhereConditionType[];
  NOT?: PrismaWhereConditionType[];
};
