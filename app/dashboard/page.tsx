"use client";

import { useEffect, useState } from "react";
import { demoHarvests } from "@/lib/demoData";

export default function DashboardPage() {
  const [network, setNetwork] = useState("");

  useEffect(() => {
    async function loadNetwork() {
      try {
        const ethereum = (window as unknown as { ethereum?: { request: (args: { method: string }) => Promise<string> } }).ethereum;
        if (!ethereum) {
          setNetwork("Wallet Not Connected");
          return;
        }

        const chainId = await ethereum.request({ method: "eth_chainId" });

        if (chainId === "0xaa36a7") {
          setNetwork("Sepolia Testnet");
        } else if (chainId === "0x1") {
          setNetwork("Ethereum Mainnet");
        } else {
          setNetwork("Unknown Network");
        }
      } catch {
        setNetwork("Wallet Not Connected");
      }
    }

    loadNetwork();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-2">
        SmartFarmChain Dashboard
      </h1>

      <p className="text-gray-600">
        Wallet connected successfully.
      </p>

      <p className="mt-2 text-blue-600">
        Connected Network: {network}
      </p>

      <p className="text-green-600 mt-4 mb-6">
        Wallet integration enabled when connected to live blockchain.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Harvest Records
      </h2>

      <div className="grid gap-4">
        {demoHarvests.map((harvest) => (
          <div
            key={harvest.id}
            className="border rounded-lg p-4 shadow-sm"
          >
            <p><strong>Crop:</strong> {harvest.crop}</p>
            <p><strong>Farmer:</strong> {harvest.farmer}</p>
            <p><strong>Quantity:</strong> {harvest.quantity}</p>
            <p><strong>Status:</strong> {harvest.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}