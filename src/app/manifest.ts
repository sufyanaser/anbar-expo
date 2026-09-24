import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "ANBAR EXPO | منصة فعاليات الأنبار",
    short_name: "ANBAR EXPO",
    description:
      "المظلة الرقمية لفعاليات ومعارض ومؤتمرات الأنبار، بهوية مستقلة لكل حدث.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#161412",
    lang: "ar-IQ",
    dir: "rtl",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "الفعاليات",
        short_name: "الفعاليات",
        description: "استعرض فعاليات الأنبار",
        url: "/#events",
        icons: [
          {
            src: "/shortcut-icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
        ],
      },
    ],
  };
}
