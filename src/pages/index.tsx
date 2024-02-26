import Head from "next/head";
import Image from "next/image";
import { api } from "~/utils/api";
import header from "../../public/bg-header-desktop.svg";

export default function Home() {
  const { data: jobListings, isLoading } = api.job.getJobs.useQuery([], {
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  console.clear();
  console.log(isLoading, jobListings);

  if (!jobListings) return <></>;

  return (
    <>
      <Head>
        <title>Job Listings</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className="bg-[#5da5a4]">
          <Image src={header} alt="header" />
        </div>
        {jobListings.map((job) => (
          <div
            key={job.id}
            className="m-10 flex h-36 items-center rounded-md border-l-4 border-[#5da5a4] bg-white p-14 shadow-lg"
          >
            <div className="flex w-full gap-8">
              <div className="h-16 w-16 rounded-full bg-[#2C3A3A]" />
              <div className="flex w-full flex-col">
                <div className="flex gap-4">
                  <span className="font-bold text-[#5da5a4]">
                    {job.companyName}
                  </span>
                  <div className="flex gap-2">
                    <span className="h-fit rounded-full bg-[#5da5a4] p-1 pl-2 pr-2 pt-[6px] text-xs font-semibold leading-none text-white">
                      NEW!
                    </span>
                    <span className="h-fit rounded-full bg-[#2C3A3A] p-1 pl-2 pr-2 pt-[6px] text-xs font-semibold leading-none text-white">
                      FEATURED!
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#2C3A3A]">
                    Senior Frontend Developer
                  </span>
                  <div className="flex gap-4">
                    {job.tags?.map((tag) => (
                      <span
                        key={tag.id}
                        className="rounded-md bg-[#EEF6F6] p-3 pb-1 pt-[6px] font-bold text-[#5da5a4]"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-[#7B8E8E]">
                    {job.date.toDateString()}
                  </span>
                  <div className="h-1 w-1 rounded-full bg-[#7B8E8E]" />
                  <span className="font-semibold text-[#7B8E8E]">
                    {job.contractType}
                  </span>
                  <div className="h-1 w-1 rounded-full bg-[#7B8E8E]" />
                  <span className="font-semibold text-[#7B8E8E]">
                    {job.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
