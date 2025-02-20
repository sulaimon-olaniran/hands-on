import NFTItemCardComponent from "@/components/nft-item-card";
import PlayIcon from "@/svgs/play";
import RocketIcon from "@/svgs/rocket";
import one from "@/public/images/nft_one.avif";
import two from "@/public/images/nft_two.jpg";
import three from "@/public/images/nft_three.jpg";

const NFTHomeGallaryUi = () => {
  const items = ["1", "2", "3"];
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

  return (
    <div className="w-full h-fit flex flex-col items-center pt-[96px] gap-y-12 ">
      <div className="w-full">
        <h1 className="w-fit font-[700] text-[24px] leading-[24px] text-white ">
          Your NFT Gallary
        </h1>
      </div>

      <div className="w-full flex flex-row items-center space-x-8">
        {nfts.map(item => (
          <NFTItemCardComponent nft={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default NFTHomeGallaryUi;
