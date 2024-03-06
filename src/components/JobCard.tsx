import { formatDateDistance } from "~/utils/utils";
import { type Tag, type JobOffer } from "../types/types";
import Image from "next/image";

interface Props {
  job: JobOffer;
  addFilterHandler: (tag: Tag) => void;
}

const JobCard = ({ job, addFilterHandler }: Props) => {
  return (
    <div
      className={`${formatDateDistance(job.date.toString()) === "1d ago" ? "border-l-[5px] border-[#5da5a4]" : ""} relative flex w-full items-center rounded-md bg-white shadow-lg max-lg:mt-8 max-lg:p-6 lg:h-36 lg:p-8`}
    >
      <div className="flex w-full items-center">
        <div className="flex w-full justify-between max-lg:flex-col max-lg:gap-4 lg:items-center">
          <div className="flex items-center gap-6">
            {job.photo && (
              <Image
                src={`data:image/svg+xml;base64,${job.photo}`}
                alt="company-logo"
                width={66}
                height={66}
                className="max-lg:absolute max-lg:-top-8"
              />
            )}
            <div className="flex flex-col gap-1 max-lg:gap-2 max-lg:pt-4">
              <div className="flex gap-4">
                <span className="font-bold text-[#5da5a4]">
                  {job.companyName}
                </span>
                <div className="flex gap-2">
                  {formatDateDistance(job.date.toString()) === "1d ago" && (
                    <span className="h-fit rounded-full bg-[#5da5a4] p-1 pl-2 pr-2 pt-[7px] text-xs font-semibold leading-none text-white">
                      NEW!
                    </span>
                  )}
                  {job.featured && (
                    <span className="h-fit rounded-full bg-[#2C3A3A] p-1 pl-2 pr-2 pt-[7px] text-xs font-semibold leading-none text-white">
                      FEATURED
                    </span>
                  )}
                </div>
              </div>
              <span className="text-lg font-bold text-[#2C3A3A]">
                {job.roleName}
              </span>
              <div className="flex items-center gap-4">
                <span className="text-[#7B8E8E]">
                  {formatDateDistance(job.date.toString())}
                </span>
                <div className="h-1 w-1 rounded-full bg-[#7B8E8E]" />
                <span className="text-[#7B8E8E]">{job.contractType}</span>
                <div className="h-1 w-1 rounded-full bg-[#7B8E8E]" />
                <span className="text-[#7B8E8E]">{job.location}</span>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#9fb8b8] lg:hidden" />
          <div className="flex flex-wrap gap-4">
            {job.tags?.map((tag) => (
              <span
                key={tag.id}
                onClick={() => addFilterHandler(tag)}
                className="cursor-pointer rounded-md bg-[#EEF6F6] p-3 pb-1 pt-[6px] font-bold text-[#5da5a4]"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
