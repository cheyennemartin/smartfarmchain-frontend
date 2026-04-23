declare global {
  interface Window {
    ethereum?: any;
  }
}

export async function connectMetaMask() {
  if (!window.ethereum) {
    alert("Install MetaMask");
    return null;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  return { address: accounts[0] };
}