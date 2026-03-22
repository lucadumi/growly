import { PrismaClient } from "./generated/prisma";
import { PrismaNeonHttp } from "@prisma/adapter-neon";

declare global {
  var prisma: PrismaClient | undefined;
}

function createPrismaClient() {
  const adapter = new PrismaNeonHttp(process.env.DATABASE_URL!);
  return new PrismaClient({ adapter } as any);
}

export const prisma = global.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
