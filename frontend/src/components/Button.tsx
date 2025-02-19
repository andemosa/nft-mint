import { ConnectButton } from "@rainbow-me/rainbowkit";

import { WalletIcon } from "./Icons";
import { Button } from "./ui/button";

const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] hover:from-pink-600 hover:to-purple-700 gap-2 px-6 py-5 h-10 w-42 rounded-full cursor-pointer"
                    onClick={openConnectModal}
                    type="button"
                  >
                    <WalletIcon /> Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button
                    className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] hover:from-pink-600 hover:to-purple-700 gap-2 px-6 py-5 h-10 w-42 rounded-full cursor-pointer"
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </Button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <Button
                    className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] hover:from-pink-600 hover:to-purple-700 gap-2 md:px-6 md:py-5 px-2 py-4 h-10 rounded-full cursor-pointer"
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 30,
                          height: 30,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 30, height: 30 }}
                          />
                        )}
                      </div>
                    )}
                  </Button>
                
                  <Button
                    className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] hover:from-pink-600 hover:to-purple-700 gap-2 md:px-6 md:py-5 px-2 py-4 h-10 rounded-full cursor-pointer"
                    onClick={openAccountModal}
                    type="button"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomConnectButton;
