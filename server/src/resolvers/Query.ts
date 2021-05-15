export function user(parent: any, args: any, context: any): any {
  return context.prisma.user.findMany();
}
