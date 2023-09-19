import { PrismaSelectType } from "./prismaSelect.type";

export function prismaSelectToJsonString<T = {}>(
  jsonArray: PrismaSelectType<T>
): string {
  return JSON.stringify(jsonArray);
}
