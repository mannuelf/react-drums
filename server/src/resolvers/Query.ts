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
  try {
    return await context.prisma.user.findMany();
  } catch (error) {
    throw new Error(error);
  }
};

export const user = async (parent, args, context, info): Promise<IUser> => {
  try {
    return await context.prisma.user.findUnique({
      where: { id: Number(args.id) },
    });
  } catch (error) {
    throw new Error(error);
  }
};
