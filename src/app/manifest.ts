import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ANBAR EXPO | معرض الأنبار الدولي",
    short_name: "ANBAR EXPO",
    description: "المنصة الرسمية للمعارض والفعاليات الدولية في الأنبار.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f5ef",
    theme_color: "#2f221d",
    lang: "ar",
    dir: "rtl",
  };
}
