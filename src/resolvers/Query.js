async function feed(parent, args, context, info) {
  const where = args.filter ? {
    OR: [
      { description_contains: args.fileter },
      { url_contains: args.filter }
    ],
  } : {}

  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  })
  return links
}

module.exports = {
  feed,
}