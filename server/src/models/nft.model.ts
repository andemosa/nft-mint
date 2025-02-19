import { Model, Schema, Types, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface INFT {
  name: string;
  description: string;
  logo: string;
  address: string;
  id: number;
  _doc: Omit<this, "_doc">;
}

interface NFTModel extends Model<INFT> {}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<INFT, NFTModel>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// 3. Create a Model.
const NFT = model<INFT, NFTModel>("NFT", schema);

export { NFT, INFT };
