export const User = (parent: any, args: any, context: any): void => {
  return context.prisma.user.findMany();
};
