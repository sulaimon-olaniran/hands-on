"use client";

import AppLogo from "@/svgs/logo";
import WalletIcon from "@/svgs/wallet";

const NavbarComponent = () => {
  return (
    <div className="w-full h-full flex items-center justify-between">
      <AppLogo />

      <button className="w-[180px] h-[40px] space-x-1 flex items-center justify-center rounded-[9999px] text-white bg-gradient-to-r from-pink-500 to-indigo-500 shadow-md transition duration-300 hover:shadow-lg hover:brightness-110">
        <WalletIcon />
        <p className="text-[15px] font-[400]  ">Connect Wallet</p>
      </button>
    </div>
  );
};

export default NavbarComponent;
