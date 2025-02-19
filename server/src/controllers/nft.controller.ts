import { NextFunction, Request, Response } from "express";

import createError from "../utils/createError";

import { StoreNFTInput } from "../schema/nft.schema";
import { NFT } from "../models/nft.model";

interface IQuery {
  address: string;
}

const storeNFT = async (
  req: Request<{}, {}, StoreNFTInput["body"]>,
  res: Response,
  next: NextFunction
) => {
  const nft = await NFT.findOne({ id: req.body.id });
  if (nft) return next(createError(409, "Nft already exists"));

  const newNFT = new NFT({
    ...req.body,
  });

  try {
    const savedNFT = await newNFT.save();
    res.status(201).json(savedNFT);
  } catch (err) {
    next(err);
  }
};

const getNFTs = async (
  req: Request<{}, {}, {}, IQuery>,
  res: Response,
  next: NextFunction
) => {
  const { address } = req.query;

  try {
    const nfts = await NFT.find({ address });

    res.status(200).json(nfts);
  } catch (err) {
    next(err);
  }
};

const getNFTData = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const nft = await NFT.findOne({ id: req.params.id });

    if (!nft) next(createError(404, "NFT not found!"));

    res.status(200).json(nft);
  } catch (err) {
    next(err);
  }
};

export default { storeNFT, getNFTs, getNFTData };
