import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const jobRouter = createTRPCRouter({
  getJobs: publicProcedure.query(({ ctx }) => {
    return ctx.db.jobOffer.findMany({
      orderBy: { date: "desc" },
      include: {tags: true}
    });
  }),
});
