import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { contactMailto } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="py-[clamp(72px,11vw,140px)] text-center">
      <Container>
        <h2 className="text-[clamp(2.4rem,5.5vw,4rem)] tracking-[-0.035em]">Let&apos;s collaborate.</h2>
        <Button href={contactMailto} variant="primary" className="mt-9 px-8 py-4 text-[1.05rem]">
          Get in touch
        </Button>
      </Container>
    </section>
  );
}
