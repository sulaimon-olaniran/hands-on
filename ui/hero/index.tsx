import PlayIcon from "@/svgs/play";
import RocketIcon from "@/svgs/rocket";

const HeroSectionUi = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center pt-[96px] ">
      <h1 className="w-[577px] font-[700] leading-[60px] text-[60px] text-center ">{`Discover & Collect Extraordinary NFTs`}</h1>
      <p className="w-[795px] pt-[40px] text-center font-[400] leading-[20px] text-[20px] ">
        {`Enter the world of digital art and collectibles. Explore unique NFTs created by artists worldwide.`}
      </p>

      <div className="flex flex-row items-center mt-[40px] space-x-8 ">
        <button className="w-[180px] h-[58px] space-x-1 flex items-center justify-center rounded-[12px] text-white bg-gradient-to-r from-pink-500 to-indigo-500 shadow-md transition duration-300 hover:shadow-lg hover:brightness-110">
          <RocketIcon />
          <p className="text-[16px] font-[700]  ">Connect Wallet</p>
        </button>

        <button className="w-[180px] h-[58px] space-x-1 flex items-center border-[1px] border-[#374151] justify-center bg-[#1F293780]/50 rounded-[12px] text-white shadow-md transition duration-300 hover:shadow-lg hover:brightness-110">
          <PlayIcon />
          <p className="text-[16px] font-[400]  ">Connect Wallet</p>
        </button>
      </div>
    </div>
  );
};

export default HeroSectionUi;
