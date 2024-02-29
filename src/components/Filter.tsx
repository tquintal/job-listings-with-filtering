import { type SetStateAction } from "react";
import { type Tag } from "~/types/types";

interface Props {
  filter: Tag[] | null;
  setFilter: (value: SetStateAction<Tag[] | null | undefined>) => void;
  removeFilterHandler: (tag: Tag) => void;
}

const Filter = ({ filter, removeFilterHandler, setFilter }: Props) => {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md bg-white p-6 shadow-lg lg:w-1/2">
      <div className="flex flex-wrap gap-3">
        {filter?.map((el) => (
          <div key={el.id} className="flex">
            <div className="w-fit rounded-md rounded-r-none bg-[#EEF6F6] p-3 pb-1 pt-[6px] font-bold text-[#5da5a4]">
              {el.name}
            </div>
            <div
              onClick={() => removeFilterHandler(el)}
              className="flex w-8 cursor-pointer items-center justify-center rounded-r-md bg-[#5da5a4] font-bold text-white"
            >
              X
            </div>
          </div>
        ))}
      </div>
      <span
        onClick={() => setFilter(null)}
        className="cursor-pointer font-bold text-[#5da5a4] underline"
      >
        Clear
      </span>
    </div>
  );
};

export default Filter;
