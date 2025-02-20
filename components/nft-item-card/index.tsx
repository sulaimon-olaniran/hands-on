"use client";

import Image from "next/image";

interface ComponentProps {
  nft: {
    name: string;
    description: string;
    image: string;
  };
}

const NFTItemCardComponent = ({nft}: ComponentProps) => {
  return (
    <div className="w-[390px] h-[278px] bg-[#11182780] border-[1px] border-[#1F2937] rounded-[12px] overflow-hidden ">
      <div className="w-full h-[192px] bg-black/50 relative ">
        <div className="absolute w-full h-full flex items-center justify-center"></div>
        <Image
          src={nft.image}
          width={600}
          height={600}
          alt="nft"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="px-[16px] pt-[18px] flex flex-col space-y-3 ">
        <p className="font-[700] text-[16px] leading-[16px] ">{nft.name}</p>
        <span className="text-[14px] leading-[14px] font-[400] text-[#9CA3AF] ">
          {nft.description}
        </span>
      </div>
    </div>
  );
};

export default NFTItemCardComponent;
