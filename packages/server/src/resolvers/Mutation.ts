import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { APP_SECRET } from '../constants';
import { IAuthPayload, IUser } from '../types';
const { sign } = jwt;

export const signup = async (
  parent,
  args,
  context,
  info,
): Promise<IAuthPayload> => {
  try {
    console.log('✅ Signup', args);
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.user.create({
      data: {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        isAdmin: args.isAdmin,
        password: password,
        createdAt: args.createdAt,
        updatedAt: args.updatedAt,
      } as IUser,
    });

    const token = sign({ userId: user.id }, APP_SECRET);
    const error = args.error;

    return { token, user, error: null };
  } catch (error) {
    console.log(`🚨 Mutation > signup: ${error}`);
    return { token: null, user: null, error: error.message };
    throw new Error(`signup: ${error}`);
  }
};

export const login = async (
  parent,
  args,
  context,
  info,
): Promise<IAuthPayload> => {
  const user = await context.prisma.user.findUnique({
    where: { email: args.email },
  });

  if (!user) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(args.password, user.password);

  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = sign({ userId: user.id }, APP_SECRET);
  return { token, user };
};

export const user = async (parent, args, context, info): Promise<IUser> => {
  console.log('✅ User', args);
  try {
    const { userId } = context;
    return await context.prisma.user.create({
      data: {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        isAdmin: args.isAdmin,
        password: args.password,
        createdAt: args.createdAt,
        updatedAt: args.updatedAt,
      } as IUser,
    });
  } catch (error) {
    console.log(`🚨 Mutation > user ${error}`);
    throw new Error(`user: ${error}`);
  }
};
