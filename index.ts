import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prismaAccelerate = new PrismaClient().$extends(withAccelerate());
// const prisma = new PrismaClient();

async function main() {
  // const normalPrisma = await prisma.task.findFirst();
  // console.log(normalPrisma);

  const acceleratePrisma = await prismaAccelerate.task.findFirst();
  console.log(acceleratePrisma);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    // await prisma.$disconnect();
  });
