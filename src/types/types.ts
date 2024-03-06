import { z } from "zod";

const Tag = z.object({
  id: z.number().int().positive(),
  name: z.string(),
});

const JobOffer = z.object({
  id: z.number().int().positive(),
  photo: z.string().nullish(),
  companyName: z.string(),
  roleName: z.string(),
  contractType: z.string(),
  location: z.string(),
  date: z.date(),
  featured: z.boolean(),
  tags: z.array(Tag).nullish(),
});

export type JobOffer = z.infer<typeof JobOffer>;
export type Tag = z.infer<typeof Tag>;
