import express from "express";

import nftController from "../controllers/nft.controller";

import validate from "../middleware/validateResource";

import { StoreNFTSchema } from "../schema/nft.schema";

/**
 * @openapi
 * tags:
 *   name: NFT
 *   description: The NFT API provides endpoints for managing NFTs, including storing, retrieving wallet address's NFTs.
 */
const nftRouter = express.Router();

/**
 * @openapi
 * '/api/nfts':
 *  post:
 *    tags: [NFT]
 *    summary: store a new NFT
 *    description: This endpoint is used when a user wants to store a new NFT.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/StoreNFTSchema'
 *    responses:
 *      201:
 *        description: NFT stored successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/StoreNFTResponse'
 *      400:
 *        description: Bad request
 *      409:
 *        description: Conflict
 */
nftRouter.post("/", validate(StoreNFTSchema), nftController.storeNFT);

/**
 * @openapi
 * '/api/nfts':
 *  get:
 *    tags: [NFT]
 *    summary: Return a list of nfts
 *    description: This endpoint is used to return a list of nfts owned by a wallet address. It accepts query filters.
 *    parameters:
 *      - in: query
 *        name: address
 *        schema:
 *          type: string
 *          default:
 *        description: The wallet address for which nfts should be gotten
 *        required: true
 *    responses:
 *      200:
 *        description: Returns a list of nfts for the wallet address
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetNFTsResponse'
 *      400:
 *        description: Bad request
 */
nftRouter.get("/", nftController.getNFTs);

/**
 * @openapi
 * '/api/nfts/{id}':
 *  get:
 *    tags: [NFT]
 *    summary: Gets the data for an NFT
 *    description: This endpoint is used to retrieve data stored under an nft id.
 *    parameters:
 *     - name: id
 *       in: path
 *       description: The id of the nft
 *       required: true
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetNFTDataResponse'
 *      400:
 *        description: Bad request
 *      404:
 *        description: NFT not found
 */

nftRouter.get("/:id", nftController.getNFTData);

export default nftRouter;
