"use client";

import { useState } from "react";
import useSWR from "swr";
import { useAccount } from "wagmi";
import { motion } from "motion/react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { fetcher } from "@/lib/axiosInstance";
import { INFT } from "@/types";
import { truncateText } from "@/lib/utils";

const Gallery = () => {
  const { address } = useAccount();

  return (
    <div className="max-w-[1440px] mx-auto p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-6 text-white">Your NFT Gallery</h2>
      {!address ? (
        <div className="h-10 md:h-14 w-full flex">
          <p className="text-white">
            Please connect your wallet to view your NFTs
          </p>
        </div>
      ) : (
        <GalleryDisplay address={address} />
      )}
    </div>
  );
};

const GalleryDisplay = ({ address }: { address: `0x${string}` }) => {
  const { data, isLoading, error } = useSWR<INFT[]>(
    `/api/nfts?address=${address}`,
    fetcher
  );

  if (isLoading)
    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => {
          return (
            <div
              key={item}
              className="w-full h-10 lg:h-12 rounded-[8px] animate-pulse bg-[#53616A4D]"
            ></div>
          );
        })}
      </div>
    );

  if (error)
    return (
      <div className="h-10 md:h-14 w-full flex">
        <p className="text-red-600">
          There was an error getting your NFTs. Please try again
        </p>
      </div>
    );

  if (data && !data.length)
    return (
      <div className="h-10 md:h-14 w-full flex">
        <p className="text-white">
          No NFTs found, please mint your first one using the widget above
        </p>
      </div>
    );

  if (data)
    return (
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        transition={{ duration: 1 }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        {data.map((nft) => (
          <Card
            key={nft.id}
            className="bg-[#11182780] border-[#1F2937] overflow-hidden rounded-[12px]"
          >
            <CardContent className="p-0">
              <div className="relative">
                <ImageComp imageUrl={nft.logo} name={nft.name} />
              </div>
            </CardContent>
            <CardFooter className="p-4 text-white">
              <div>
                <h3 className="font-bold mb-1">{nft.name}</h3>
                <p className="text-sm text-[#9CA3AF]">{truncateText(nft?.description, 200)}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </motion.div>
    );
};

const FALLBACK_IMAGE_URL =
  "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960";

const ImageComp = ({ imageUrl, name }: { imageUrl: string; name: string }) => {
  const [imgSrc, setImgSrc] = useState(imageUrl ?? FALLBACK_IMAGE_URL);

  return (
    <img
      src={imgSrc}
      onError={() => {
        setImgSrc(FALLBACK_IMAGE_URL);
      }}
      alt={name}
      className="rounded-md object-cover h-[250px] w-full bg-center"
    />
  );
};

export default Gallery;
