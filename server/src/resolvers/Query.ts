export const user = async (parent, args, context): Promise<any> => {
  const user = await context.prisma.user.findMany();
  console.log('Query: user', user, args);
  return user;
};
