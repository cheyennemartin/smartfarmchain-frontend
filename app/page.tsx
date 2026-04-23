"use client";

import Image from "next/image";
import { useState } from "react";
import { connectMetaMask } from "@/lib/wallet";

export default function Home() {
  const [wallet, setWallet] = useState("");

  const handleConnect = async () => {
    const result = await connectMetaMask();
    if (!result) return;

    setWallet(result.address);
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-20 px-10 bg-white dark:bg-black sm:items-start">
        
        {/* HEADER */}
        <div className="flex w-full justify-between items-center">
          <h1 className="text-2xl font-bold">SmartFarmChain</h1>

          <button
            onClick={handleConnect}
            className="px-4 py-2 bg-green-700 text-white rounded-lg"
          >
            Connect MetaMask
          </button>
        </div>

        {/* LOGO */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        {/* TEXT */}
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <h2 className="text-xl font-semibold">
            SmartFarmChain Dashboard
          </h2>

          <p>
            {wallet
              ? `Connected: ${wallet}`
              : "Connect your wallet to begin"}
          </p>
        </div>

      </main>
    </div>
  );
}