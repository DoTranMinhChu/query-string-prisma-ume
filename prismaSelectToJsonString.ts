import { PrismaSelectType } from "./prismaSelect.type";

export function prismaSelectToJsonString(jsonArray: PrismaSelectType): string {
  return JSON.stringify(jsonArray);
}
