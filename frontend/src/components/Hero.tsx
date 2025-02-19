"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { CreatingIcon, WatchIcon } from "./Icons";
import HeaderAnimation from "./HeaderAnimation";

const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <div className="text-center max-w-3xl mx-auto p-2">
      <HeaderAnimation
        initial
        text="Discover & Collect <br /> Extraordinary NFTs"
        className="text-4xl md:text-6xl leading-[1.2] font-bold mb-4 text-white"
      />
      <motion.p
        className="text-[#D1D5DB] my-6 lg:my-8 text-center"
        transition={{ duration: 1 }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Enter the world of digital art and collectibles. Explore unique NFTs
        created by artists <br className="hidden lg:block" /> worldwide.
      </motion.p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] hover:from-pink-600 hover:to-purple-700 gap-2 px-6 py-5 h-10 w-42 cursor-pointer"
          onClick={() => scrollToElement("mint-widget")}
        >
          <CreatingIcon /> Start Creating
        </Button>
        <Button
          variant="outline"
          className="gap-2 bg-[#1F293780] text-white hover:bg-[#1F293780] hover:text-white border border-[#374151] hover:border-[#374151] px-6 py-5 h-10 w-42"
        >
          <WatchIcon /> Watch Demo
        </Button>
      </div>
    </div>
  );
};

export default Hero;
