import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";

const ENABLE_TESTNETS = process.env.NEXT_PUBLIC_ENABLE_TESTNETS ?? "true";
const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID ?? "";

export const config = getDefaultConfig({
  appName: "Cytric NFT Mint",
  projectId: PROJECT_ID,
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});
