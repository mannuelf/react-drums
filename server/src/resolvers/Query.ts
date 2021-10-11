import { IUser, IUsers } from '../types';

export const users = async (parent, args, context, info): Promise<IUsers> => {
  try {
    return await context.prisma.user.findMany();
  } catch (error) {
    console.log(`🚨 Query > user ${error}`);
    //throw new Error(error);
  }
};

export const user = async (parent, args, context, info): Promise<IUser> => {
  try {
    return await context.prisma.user.findUnique({
      where: { id: Number(args.id) },
    });
  } catch (error) {
    console.log(`🚨 Query > user: ${error}`);
    //throw new Error(error);
  }
};
