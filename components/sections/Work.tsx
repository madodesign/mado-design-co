import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WorkCard } from "@/components/ui/WorkCard";
import { workExamples } from "@/lib/content";

export function Work() {
  return (
    <section id="work" className="bg-bg-2 py-[clamp(72px,11vw,140px)]">
      <Container>
        <Eyebrow>Work</Eyebrow>
        <h2 className="text-[clamp(2rem,3.8vw,3rem)]">Examples</h2>
        <div className="mt-[clamp(40px,5vw,60px)] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workExamples.map((card) => (
            <WorkCard key={card.client} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
