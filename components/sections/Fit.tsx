import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FitItem } from "@/components/ui/FitItem";
import { fitItems } from "@/lib/content";

export function Fit() {
  return (
    <section id="fit" className="py-[clamp(72px,11vw,140px)]">
      <Container>
        <Eyebrow>Who it&apos;s for</Eyebrow>
        <h2 className="text-[clamp(2rem,3.8vw,3rem)]">You might need a design partner if …</h2>
        <div className="mt-[clamp(40px,5vw,56px)] grid grid-cols-1 gap-x-[clamp(28px,4vw,56px)] gap-y-4 sm:grid-cols-2">
          {fitItems.map((item) => (
            <FitItem key={item}>{item}</FitItem>
          ))}
        </div>
      </Container>
    </section>
  );
}
