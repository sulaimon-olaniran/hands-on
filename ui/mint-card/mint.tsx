"use client";
import PrimaryTextInputComponent from "@/components/inputs/text-input";
import {PrimaryTextAreaInput} from "@/components/inputs/textarea";
import {Loader2} from "lucide-react";
import {useForm} from "react-hook-form";

import AppLogo from "@/svgs/logo";

interface ComponentProps {
  toggleTab: () => void;
}

const MintCardCreateNFT = ({toggleTab}: ComponentProps) => {
  const {control} = useForm();
  const loading = false;

  return (
    <div className="w-[576px] h-full rounded-[16px] border-[1px] border-[#1F2937] bg-[#11182780] p-[33px] flex flex-col space-y-4 sm:w-full sm:px-[12px] ">
      <div className="h-[32px] flex flex-2 ">
        <h1 className="font-[700] text-[24px] text-white leading-[29.05px] ">
          Mint Your NFT
        </h1>
      </div>

      <div className="flex flex-1 w-full flex-col justify-between space-y-4">
        <PrimaryTextInputComponent
          type="text"
          control={control}
          name="nft_name"
          label="NTF Name"
          placeholder="Enter NFT name"
        />

        <PrimaryTextAreaInput
          type="text"
          control={control}
          name="nft_description"
          label="NTF Description"
          placeholder="Describe your NFT"
        />

        <PrimaryTextInputComponent
          type="url"
          control={control}
          name="image_url"
          label="NTF Description"
          placeholder="Enter image URL"
        />

        <button
          onClick={toggleTab}
          className="w-full h-[58px] space-x-2 flex items-center justify-center rounded-[12px] text-white bg-gradient-to-r from-pink-500 to-indigo-500 shadow-md transition duration-300 hover:shadow-lg hover:brightness-110"
        >
          {loading ? (
            <Loader2 className="animate-spin" color="#ffffff" />
          ) : (
            <>
              <AppLogo width="17" height="17" fill="#ffffff" />
              <p className="text-[16px] font-[700]  ">Mint NFT</p>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default MintCardCreateNFT;
