interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  createdAt: string;
}

interface IUsers {
  users: [IUser];
}
export const users = async (parent, args, context, info): Promise<IUsers> => {
  console.log('USERS', typeof args, args);
  const users = await context.prisma.user.findMany();
  console.log(users);
  return users;
};

export const user = async (parent, args, context, info): Promise<IUser> => {
  console.log('USER', typeof args.id, args.id);
  const user = await context.prisma.user.findUnique({
    where: { id: Number(args.id) },
  });
  return user;
};
