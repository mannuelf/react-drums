import { PrismaClient } from '@prisma/client';

const prisma: PrismaClient = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      firstName: 'Jack',
      lastName: 'Black',
      email: 'jackblack@email.com',
      isAdmin: false,
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  newUser;
  console.log('0️⃣ ~ file: seed-db.ts:21 ~ main ~ newUser:', newUser);
  const allUsers = await prisma.user.findMany();
  console.log('1️⃣ ~ file: seed-db.ts:20 ~ main ~ allUsers :', allUsers);
}

main()
  .catch((error) => {
    console.log(error);
    throw new Error(`Oops ${error}`);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
