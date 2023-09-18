import { PrismaWhereConditionType } from "./prismaWhereCondition.type";

export function prismaWhereConditionToJsonString(
  filter: PrismaWhereConditionType
): string {
  return JSON.stringify({ filter });
}
