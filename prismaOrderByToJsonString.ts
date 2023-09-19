import { PrismaOrderByType } from "./prismaOrderBy.type";

export function prismaOrderByToJsonString<T = {}>(
  input: PrismaOrderByType<T>
): string {
  const jsonArray = Object.entries(input).map(([key, value]) => ({
    [key]: value,
  }));
  return JSON.stringify(jsonArray);
}
