
export async function connectMetaMask() {
  if (typeof window === "undefined") return null;

  const ethereum = (window as any).ethereum;

  if (!ethereum) {
    alert("MetaMask not detected. Install MetaMask or open this site in MetaMask browser.");
    return null;
  }

  try {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    return { address: accounts[0] };
  } catch (error) {
    console.error("MetaMask connection failed:", error);
    alert("MetaMask connection failed or was cancelled.");
    return null;
  }
}