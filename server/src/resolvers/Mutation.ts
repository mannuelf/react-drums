import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { APP_SECRET } from '../constants';
import { AuthPayload, IUser } from '../types';
const { sign } = jwt;

export const signup = async (
  parent,
  args,
  context,
  info
): Promise<AuthPayload> => {
  try {
    console.log('Mutation: signup', args);
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.user.create({
      data: { ...args, password },
    });
    console.log('>>', user);
    const token = sign({ userId: user.id }, APP_SECRET);

    return { token, user };
  } catch (error) {
    throw new Error(error);
  }
};

export const login = async (
  parent,
  args,
  context,
  info
): Promise<AuthPayload> => {
  console.log('Mutation: login', args);
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
  try {
    console.log('Mutation: user', args);
    const { userId } = context;
    return await context.prisma.user.create({
      data: {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        password: args.password,
        createdAt: args.createdAt,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
