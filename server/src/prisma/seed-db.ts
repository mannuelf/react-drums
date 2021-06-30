import { PrismaClient } from '@prisma/client';

const prisma: PrismaClient = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      firstName: 'Jack',
      lastName: 'Black',
      email: 'jackblack@email.com',
      password: 'password',
      createdAt: new Date(),
    },
  });
  const allUsers = await prisma.user.findMany();
}

main()
  .catch((error) => {
    console.log(error);
    throw new Error(`Ooops ${error}`);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
