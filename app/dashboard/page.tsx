
import { demoHarvests } from "@/lib/demoData";
export default function DashboardPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>SmartFarmChain Dashboard</h1>
      <p>Wallet connected successfully.</p>
    </main>
  );
}

{demoHarvests.map((harvest) => (
  <div key={harvest.id}>
    <p>{harvest.crop}</p>
    <p>{harvest.farmer}</p>
    <p>{harvest.quantity}</p>
    <p>{harvest.status}</p>
  </div>
))}

"use client";

import { useEffect, useState } from "react";
import { getNetwork } from "@/lib/metamask";

export default function DashboardPage() {
  const [network, setNetwork] = useState("");

  useEffect(() => {
    async function loadNetwork() {
      const chainId = await getNetwork();

      if (chainId === "0xaa36a7") {
        setNetwork("Sepolia Testnet");
      } else if (chainId === "0x1") {
        setNetwork("Ethereum Mainnet");
      } else {
        setNetwork("Unknown Network");
      }
    }

    loadNetwork();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p className="mt-2 text-gray-600">
        Wallet integration enabled on: {network}
      </p>
<p className="text-green-600 mt-4">
  Wallet integration will be enabled when connected to the live blockchain network.
</p>
    </div>
  );
}