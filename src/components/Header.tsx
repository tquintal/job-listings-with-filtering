import Image from "next/image";
import header from "../../public/bg-header-desktop.svg";

const Header = () => {
  return (
    <div className="mb-12 flex h-40 w-full justify-center bg-[#5da5a4]">
      <Image
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        src={header}
        alt="header"
        layout="responsive"
        objectFit="cover"
        objectPosition="top"
      />
    </div>
  );
};

export default Header;
