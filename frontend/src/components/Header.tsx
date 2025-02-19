import { Logo } from "./Icons";
import CustomConnectButton from "./Button";

const Header = () => {
  return (
    <div className="mb-8 bg-[#000000CC]">
      <nav className="flex justify-between items-center py-2 px-4 sm:py-6 sm:px-12 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2 text-white">
          <Logo />
          <p className="hidden sm:block text-xl font-bold">NFT Mint</p>
        </div>

        <CustomConnectButton />
      </nav>
    </div>
  );
};

export default Header;
