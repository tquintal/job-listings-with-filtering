import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const Tag = z
  .array(
    z.object({
      id: z.number(),
      name: z.string(),
    }),
  )
  .nullish();

export const jobRouter = createTRPCRouter({
  getJobs: publicProcedure.input(Tag).query(async ({ ctx, input }) => {
    const filterTags = input ?? [];

    return await ctx.db.jobOffer.findMany({
      include: { tags: true },
      where: {
        AND: filterTags.map((tag) => ({
          tags: {
            some: {
              id: tag.id,
            },
          },
        })),
      },
      orderBy: { date: "desc" },
    });
  }),
});
