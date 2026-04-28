export async function getNetwork() {
  const sdk = getMetaMaskSDK();
  if (!sdk) return null;

  const provider = sdk.getProvider();

  const chainId = await provider.request({
    method: "eth_chainId",
  });

  return chainId;
}