import { AudiencePaths } from "@/components/sections/audience-paths";
import { Categories } from "@/components/sections/categories";
import { FeaturedEvent } from "@/components/sections/featured-event";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Introduction } from "@/components/sections/introduction";
import { MediaPreview } from "@/components/sections/media-preview";
import { PartnersPreview } from "@/components/sections/partners-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedEvent />
      <Introduction />
      <Categories />
      <AudiencePaths />
      <PartnersPreview />
      <MediaPreview />
      <FinalCta />
    </>
  );
}
