import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ARGO Engineering Industries",
    short_name: "ARGO",
    description:
      "Punjab manufacturer & exporter of ARGO Mini Reaper multicrop harvesters and rice mill (rice sheller) machines.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0E7A35",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
