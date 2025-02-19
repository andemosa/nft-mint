"use client";

import { useState } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { sepolia } from "viem/chains";
import { Loader2 } from "lucide-react";
import { readContract } from "@wagmi/core";
import { mutate as globalMutate } from "swr";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MintIcon } from "./Icons";

import { config } from "../wagmi";

import { axiosInstance, BASE_URL } from "@/lib/axiosInstance";
import { abi, CONTRACT_ADDRESS } from "@/lib/abi";
import { INFT } from "@/types";

const _generateTokenId = () => {
  return Math.floor(10000 + Math.random() * 90000);
};

const NFTForm = ({
  handleSuccess,
}: {
  handleSuccess: (data: INFT) => void;
}) => {
  const { data } = useReadContract({
    chainId: sepolia.id,
    abi,
    address: CONTRACT_ADDRESS,
    functionName: "checkId",
    args: [BigInt(73423)],
  });
  console.log(data);
  const { address } = useAccount();

  const { writeContractAsync, isError, isSuccess } = useWriteContract();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    logo: "",
    loading: false,
    errorMsg: "",
  });

  const { description, logo, name, loading, errorMsg } = formData;

  const btnDisabled = !description || !logo || !name || !address;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      errorMsg: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      loading: true,
      errorMsg: "",
    }));
    try {
      const generateUniqueId = async () => {
        while (true) {
          const id = _generateTokenId();
          const result = await readContract(config, {
            chainId: sepolia.id,
            abi,
            address: CONTRACT_ADDRESS,
            functionName: "checkId",
            args: [BigInt(id)],
          });

          if (!result) {
            return id;
          }
        }
      };

      const uniqueId = await generateUniqueId();

      const metadataUrl = `${BASE_URL}/api/nfts/${uniqueId}`;

      await writeContractAsync({
        chainId: sepolia.id,
        abi,
        address: CONTRACT_ADDRESS,
        functionName: "mint",
        args: [BigInt(uniqueId), metadataUrl],
      });

      const res = await axiosInstance.post<INFT>(`/api/nfts`, {
        name,
        description,
        logo,
        address,
        id: uniqueId,
      });

      globalMutate(`/api/nfts?address=${address}`);
      handleSuccess(res.data);
      setFormData((prev) => ({
        ...prev,
        name: "",
        description: "",
        logo: "",
        loading: false,
      }));
    } catch (error: any) {
      setFormData((prev) => ({
        ...prev,
        loading: false,
        errorMsg:
          error.response?.data?.errorMessage ??
          "An error occurred. Please try again",
      }));
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <Card className="bg-[#11182780] rounded-lg p-4 md:p-6 lg:p-8 border border-[#1F2937]">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-white">Mint Your NFT</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-[#9CA3AF]">
                NFT Name
              </label>
              <Input
                placeholder="Enter NFT name"
                className="bg-[#1F2937] border-[#374151] text-white"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-[#9CA3AF]">
                Description
              </label>
              <Textarea
                placeholder="Describe your NFT"
                className="bg-[#1F2937] border-[#374151] text-white resize-none"
                name="description"
                value={description}
                onChange={handleChange}
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-[#9CA3AF]">
                Image URL
              </label>
              <Input
                placeholder="Enter Image URL"
                className="bg-[#1F2937] border-[#374151] text-white"
                name="logo"
                value={logo}
                onChange={handleChange}
              />
            </div>
            <Button
              disabled={btnDisabled || loading || !address}
              type="submit"
              className="w-full cursor-pointer bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#EC4899] mt-2 py-5"
            >
              {!address ? (
                <>Connect your wallet to mint</>
              ) : loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Minting...
                </>
              ) : (
                <>
                  <MintIcon /> Mint NFT
                </>
              )}
            </Button>

            {errorMsg ? (
              <pre className="my-2 text-red-500">{errorMsg}</pre>
            ) : null}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NFTForm;
