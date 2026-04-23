export async function connectMetaMask() {
  if (typeof window === "undefined") return null;

  const { ethereum } = window as any;

  if (!ethereum) {
    alert("MetaMask not detected. Please install MetaMask.");
    return null;
  }

  try {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    return { address: accounts[0] };
  } catch (error) {
    console.error(error);
    return null;
  }
}