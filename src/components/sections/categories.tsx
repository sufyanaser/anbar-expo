import { Container } from "@/components/layout/container";
import { exhibitionCategories } from "@/data/site";
import { SectionHeading } from "./section-heading";

export function Categories() {
  return (
    <section
      className="section-space border-b"
      aria-labelledby="categories-title"
    >
      <Container>
        <SectionHeading
          eyebrow="نطاق المنصة"
          title="تخصصات متعددة، بنية واحدة"
          description="تمثل هذه الفئات نطاقاً قابلاً للاستضافة مستقبلاً، ولا تعني الإعلان عن فعاليات غير معتمدة."
        />
        <ol
          id="categories-title"
          className="mt-14 grid border-t sm:grid-cols-2 lg:grid-cols-4"
        >
          {exhibitionCategories.map((category, index) => (
            <li
              key={category.en}
              className="group border-b p-6 sm:border-e lg:min-h-44"
            >
              <span className="font-latin text-copper text-xs">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-ink mt-8 text-xl font-normal">
                {category.ar}
              </h3>
              <p
                className="font-latin text-muted-foreground mt-2 text-xs"
                dir="ltr"
              >
                {category.en}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
