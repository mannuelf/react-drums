import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { APP_SECRET } from '../constants';

export async function signup(parent: any, args: any, context: any) {
  const password = await bcrypt.hash(args.password, 10);

  const user = await context.prisma.user.create({
    data: { ...args, password },
  });

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return { token, user };
}

export async function login(parent: any, args: any, context, info) {
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

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return { token, user };
}
