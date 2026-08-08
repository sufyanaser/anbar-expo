import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "الموقع قيد الإعداد",
    short_name: "قيد الإعداد",
    description: "الموقع قيد الإعداد.",
    start_url: "/",
    display: "standalone",
    background_color: "#161412",
    theme_color: "#161412",
    lang: "ar",
    dir: "rtl",
  };
}
