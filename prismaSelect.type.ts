type PrismaField = string;

type PrismaSelectTypeBase = {
  [key: string]: PrismaSelectType | PrismaField[];
};

export type PrismaSelectType = (PrismaField | "$all" | PrismaSelectTypeBase)[];
