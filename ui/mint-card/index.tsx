"use client";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import MintCardCreateNFT from "./mint";
import MintCardNFTSuccess from "./success";

const MintCardSectionUi = () => {
  const [tab, setTab] = useState<"create" | "success">("create");

  const toggleTab = () => {
    setTab(prev => (prev === "create" ? "success" : "create"));
  };

  return (
    <motion.div
      layout
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, ease: "easeInOut"}}
      className="w-full flex flex-col justify-center items-center pt-[96px] sm:pt-[60px] relative overflow-hidden"
    >
      {/* Animated Container for Height Transition */}
      <motion.div
        key={tab}
        layout
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -20}}
        transition={{duration: 0.5, ease: "easeInOut"}}
        className="w-full flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {tab === "create" && (
            <MintCardCreateNFT key="create" toggleTab={toggleTab} />
          )}
          {tab === "success" && (
            <MintCardNFTSuccess key="success" toggleTab={toggleTab} />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default MintCardSectionUi;
