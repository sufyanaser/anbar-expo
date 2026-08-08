import { Container } from "@/components/layout/container";

type RouteIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function RouteIntro({
  eyebrow,
  title,
  description,
  children,
}: RouteIntroProps) {
  return (
    <>
      <section className="editorial-grid border-b py-20 sm:py-28">
        <Container>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="text-ink mt-5 max-w-4xl text-4xl font-normal tracking-tight text-balance sm:text-6xl">
            {title}
          </h1>
          <p className="text-muted-foreground mt-7 max-w-2xl text-lg leading-9">
            {description}
          </p>
        </Container>
      </section>
      {children ? (
        <section className="section-space">
          <Container>{children}</Container>
        </section>
      ) : null}
    </>
  );
}
