import { IUser, IUsers } from '../types';

export const users = async (parent: any, args: any, context: { prisma: { user: { findMany: () => IUsers | PromiseLike<IUsers>; }; }; }, info: any): Promise<IUsers> => {
  try {
    return await context.prisma.user.findMany();
  } catch (error) {
    console.log(`🚨 Query > user ${error}`);
    //throw new Error(error);
  }
};

export const user = async (parent: any, args: { id: any; }, context: { prisma: { user: { findUnique: (arg0: { where: { id: number; }; }) => IUser | PromiseLike<IUser>; }; }; }, info: any): Promise<IUser> => {
  try {
    return await context.prisma.user.findUnique({
      where: { id: Number(args.id) },
    });
  } catch (error) {
    console.log(`🚨 Query > user: ${error}`);
    //throw new Error(error);
  }
};
