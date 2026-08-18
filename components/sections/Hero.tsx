import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { contactMailto, hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="pb-[clamp(56px,8vw,104px)] pt-[clamp(48px,8vw,96px)]">
      <Container>
        <h1 className="text-[clamp(2rem,4.4vw,3.4rem)] tracking-[-0.03em]">{hero.headline}</h1>
        <p className="mt-[26px] text-[clamp(1.08rem,1.7vw,1.27rem)] text-ink-2">
          {hero.lead[0]}
          <br />
          {hero.lead[1]}
        </p>
        <div className="mt-9 flex flex-wrap gap-3.5">
          <Button href={contactMailto} variant="primary">
            Start a project
          </Button>
          <Button href="#offer" variant="ghost">
            See pricing
          </Button>
        </div>
      </Container>
    </section>
  );
}
