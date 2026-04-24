import MetaMaskSDK from "@metamask/sdk";

export async function connectMetaMask() {
  if (typeof window === "undefined") return null;

  let ethereum = (window as any).ethereum;

  // 🔥 THIS IS THE MOBILE FIX
  if (!ethereum) {
    const MMSDK = new MetaMaskSDK({
      dappMetadata: {
        name: "SmartFarmChain",
        url: "https://smartfarmchain.netlify.app",
      },
    });

    ethereum = MMSDK.getProvider();
  }

  try {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    return { address: accounts[0] };
  } catch (error) {
    console.error("MetaMask error:", error);
    return null;
  }
}