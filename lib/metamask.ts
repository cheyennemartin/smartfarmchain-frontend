export async function getNetwork(): Promise<string> {
  if (typeof window === "undefined") {
    throw new Error("Window is not available");
  }

  const ethereum = (window as any).ethereum;

  if (!ethereum) {
    throw new Error("MetaMask is not installed");
  }

  const chainId: string = await ethereum.request({ method: "eth_chainId" });
  return chainId;
}
