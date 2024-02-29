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
  getJobs: publicProcedure.input(Tag).query(({ ctx, input }) => {
    const filterTags = input;

    return ctx.db.jobOffer.findMany({
      orderBy: { date: "desc" },
      include: { tags: true },
      where: {
        tags: {
          some: {
            id: {
              in: filterTags?.map((tag) => tag.id),
            },
          },
        },
      },
    });
  }),
});
