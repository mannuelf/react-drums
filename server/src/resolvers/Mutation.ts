import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { APP_SECRET } from '../constants';

const { sign } = jwt;

export const signup = async (parent, args, context): Promise<any> => {
  console.log('Mutation: signup', args);
  const password = await bcrypt.hash(args.password, 10);

  const user = await context.prisma.user.create({
    data: { ...args, password },
  });
  console.log('>>', user);
  const token = sign({ userId: user.id }, APP_SECRET);

  return { token, user };
};

export const login = async (parent, args, context, info): Promise<any> => {
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

export const user = async (parent, args, context, info): Promise<any> => {
  console.log('Mutation: user', args);
  const { userId } = context;
  return await context.prisma.user.create({
    data: {
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      password: args.password,
    },
  });
};
