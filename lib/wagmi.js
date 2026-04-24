import { createConfig, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { metaMask, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet],
  connectors: [
    metaMask(),
    walletConnect({
      projectId: 'YOUR_PROJECT_ID', // 👈 paste here
    }),
  ],
  transports: {
    [mainnet.id]: http(),
  },
})