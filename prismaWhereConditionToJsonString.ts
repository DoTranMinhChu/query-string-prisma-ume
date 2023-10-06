import _ from "lodash";
import { PrismaWhereConditionType } from "./prismaWhereCondition.type";

/**
 * Converts a Prisma where condition object to a JSON string.
 *
 * @param filter - The Prisma where condition object.
 * @returns A JSON string representation of the filter.
 * @example
 * const condition: PrismaWhereConditionType = {
 *   OR: [
 *     { equals: { id: 1 } },
 *     { AND: [{ contains: { name: "John" , mode: "insensitive"} }, { gt: { age: 25 } }] },
 *   ],
 * };
 * const jsonString = prismaWhereConditionToJsonString(condition);
 * console.log(jsonString); // Output: '{"filter":{"OR":[{"equals":{"id":1}},...'
 */
export function prismaWhereConditionToJsonString<T = {}>(
  filter: PrismaWhereConditionType<T>,
  omitBy: ("isUndefined" | "isNull" | "isEmpty")[] = []
): string {
  let newFilter: any = filter;
  omitBy.forEach((omitByItem) => {
    newFilter = _(newFilter).omitBy(_[omitByItem]);
  });
  newFilter = _(newFilter).value();
  return JSON.stringify(newFilter);
}
