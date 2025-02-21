"use client";
import {motion} from "framer-motion";
import Image from "next/image";

interface ComponentProps {
  nft: {
    name: string;
    description: string;
    image: string;
  };
  index: number;
}

const NFTItemCardComponent = ({nft, index}: ComponentProps) => {
  return (
    <motion.div
      className="w-[390px] h-[278px] bg-[#11182780] border border-[#1F2937] rounded-lg overflow-hidden sm:w-full tab:w-[315px] shadow-lg"
      initial={{opacity: 0, y: 30, scale: 0.95}}
      animate={{opacity: 1, y: 0, scale: 1}}
      transition={{duration: 0.5, ease: "easeOut", delay: index * 0.2}}
      whileHover={{scale: 1.05, transition: {duration: 0.3}}}
    >
      <div className="w-full h-[192px] bg-black/50 relative overflow-hidden rounded-t-lg">
        <Image
          src={nft.image}
          width={600}
          height={600}
          alt={nft.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="px-4 pt-4 flex flex-col space-y-2">
        <p className="font-bold text-lg">{nft.name}</p>
        <span className="text-sm text-gray-400">{nft.description}</span>
      </div>
    </motion.div>
  );
};

export default NFTItemCardComponent;
