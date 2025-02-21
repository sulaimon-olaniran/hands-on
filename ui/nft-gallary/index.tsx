"use client";
import {motion} from "framer-motion";
import NFTItemCardComponent from "@/components/nft-item-card";
import one from "@/public/images/nft_one.avif";
import two from "@/public/images/nft_two.jpg";
import three from "@/public/images/nft_three.jpg";

const nfts = [
  {
    name: "Cosmic Dreams #001",
    description: "A journey through digital dimensions",
    image: one.src,
  },
  {
    name: "Neo Genesis #002",
    description: "Digital evolution manifested",
    image: two.src,
  },
  {
    name: "Digital Horizon #003",
    description: "Where reality meets digital art",
    image: three.src,
  },
];

const NFTHomeGallaryUi = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center pt-[96px] gap-y-12 sm:gap-y-6 sm:pt-[40px]">
      <div className="w-full">
        <h1 className="w-fit font-bold text-2xl text-white">
          Your NFT Gallery
        </h1>
      </div>

      {/* NFT Cards Container */}
      <motion.div
        className="w-full flex flex-row items-center gap-8 sm:gap-4 flex-wrap tab:justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {opacity: 0},
          visible: {opacity: 1, transition: {staggerChildren: 0.2}},
        }}
      >
        {nfts.map((item, index) => (
          <NFTItemCardComponent nft={item} key={item.name} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default NFTHomeGallaryUi;
