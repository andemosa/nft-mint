"use client";

import { ReactNode, useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MintIcon, ShareIcon } from "./Icons";

import { INFT } from "@/types";
import { truncateText } from "@/lib/utils";

const Success = ({
  handleMintNew,
  data,
}: {
  handleMintNew: () => void;
  data: INFT | null;
}) => {
  return (
    <div className="max-w-xl mx-auto">
      <Card className="bg-[#11182780] rounded-lg p-4 md:p-6 lg:p-8 border border-[#10B981]">
        <div className="text-center sm:p-4 md:p-6">
          <div className="w-12 h-12 md:w-20 md:h-20 bg-[#10B98133] rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-6 h-6 md:w-10 md:h-10 text-[#10B981]" />
          </div>
          <h2 className="text-xl font-semibold text-[#10B981] mb-2">
            NFT Minted Successfully!
          </h2>
          <p className="text-[#9CA3AF] mb-6">
            Your NFT has been created and added to your collection
          </p>

          <Card className="bg-[#1F293780] rounded-lg p-2 md:p-4 my-4 border-0">
            <ImageWithFallback
              fallbackDisplay={
                <div className="bg-pink-500 aspect-video rounded-lg mb-4" />
              }
              imageUrl={data?.logo!}
              altText={data?.name!}
            />

            <div className="text-left mb-4 text-white">
              <p className="text-sm text-[#9CA3AF] mt-3">NFT Name</p>
              <p className="font-medium">{data?.name}</p>
              <p className="text-sm text-[#9CA3AF] mt-3">Description</p>
              <p className="text-[#D1D5DB]">{truncateText(data?.description!, 100)}</p>
              <p className="text-sm text-[#9CA3AF] mt-3">NFT ID</p>
              <p className="font-mono text-[#8B5CF6]">#{data?.id}</p>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              variant="outline"
              className="flex-1 bg-[#1F2937] text-white hover:bg-[#1F2937] hover:text-white h-10 gap-2 px-6 py-4 border-0 cursor-pointer"
            >
              <ShareIcon /> Share
            </Button>
            <Button
              className="flex-1 h-10 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] hover:from-pink-600 hover:to-purple-700 gap-2 px-6 py-4 cursor-pointer"
              onClick={handleMintNew}
            >
              <MintIcon /> Mint Another
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const ImageWithFallback = ({
  imageUrl,
  fallbackDisplay,
  altText,
}: {
  fallbackDisplay: ReactNode;
  imageUrl: string;
  altText: string;
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      {imageUrl && !imageError ? (
        <img
          src={imageUrl}
          onError={() => setImageError(true)}
          alt={altText}
          className="rounded-md object-cover max-h-[250px] w-full bg-center"
        />
      ) : (
        <>{fallbackDisplay}</>
      )}
    </>
  );
};

export default Success;
