import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SmartFarmChain",
    short_name: "SmartFarm",
    description: "Blockchain-based smart farm traceability app",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#006400",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}