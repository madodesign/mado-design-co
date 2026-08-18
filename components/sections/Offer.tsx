import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pill } from "@/components/ui/Pill";
import { OfferCard } from "@/components/ui/OfferCard";
import { offerCards, addon } from "@/lib/content";

export function Offer() {
  return (
    <section id="offer" className="bg-bg-2 py-[clamp(72px,11vw,140px)]">
      <Container>
        <Eyebrow>Services</Eyebrow>
        <h2 className="text-[clamp(2rem,3.8vw,3rem)]">Two ways to work with us</h2>

        <div className="mt-[clamp(40px,5vw,60px)] grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {offerCards.map((card) => (
            <OfferCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 items-center gap-[clamp(18px,3vw,44px)] rounded-card border border-line bg-bg p-6 lg:grid-cols-[0.72fr_1.28fr] lg:p-9">
          <div className="flex flex-col items-start gap-3">
            <Pill>Add-on</Pill>
            <h3 className="text-[clamp(1.3rem,2vw,1.6rem)]">{addon.title}</h3>
          </div>
          <p className="max-w-[60ch] text-ink-2">{addon.description}</p>
        </div>
      </Container>
    </section>
  );
}
