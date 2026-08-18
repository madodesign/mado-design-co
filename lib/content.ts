export const contactMailto = "mailto:contact@madodesign.co?subject=Hey%20Mado%20Design";

export const navLinks = [
  { href: "#offer", label: "Services" },
  { href: "#fit", label: "Who it's for" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  headline: "Design for SMEs, without the commitment of a full-time hire.",
  lead: [
    "Mado Design offers Web & UI Design, Digital Marketing Design Support, and",
    "APAC Design Localisation to businesses.",
  ],
};

export type OfferRowData = { name: string; sub?: string };

export type OfferCardData = {
  title: string;
  pill: string;
  description: string;
  rows: OfferRowData[];
  note?: string;
};

export const offerCards: OfferCardData[] = [
  {
    title: "Web & UI Design",
    pill: "Projects",
    description:
      "Defined projects with fixed-fee pricing and a clear delivery timeline, managed from discovery through to developer-ready handover.",
    rows: [
      { name: "Landing or campaign page", sub: "1 page" },
      { name: "Product or service site", sub: "4–5 pages" },
      { name: "Larger website", sub: "6–10 pages" },
      { name: "Website maintenance & optimisation" },
    ],
  },
  {
    title: "Digital Marketing Design Support",
    pill: "Retainer",
    description:
      "A monthly retainer for ongoing design needs. Scope is agreed at the start of each month, then briefs, feedback, and delivery are handled throughout.",
    rows: [
      { name: "Starter", sub: "8 hrs / week" },
      { name: "Standard", sub: "16 hrs / week" },
      { name: "Full Partner", sub: "24 hrs / week" },
    ],
    note: "A minimum three-month commitment applies.",
  },
];

export const addon = {
  title: "APAC Design Localisation",
  description:
    "For clients expanding into APAC markets, Web & UI Design and Digital Marketing Design Support can be delivered with APAC localisation built in, such as cultural adaptation and multilingual design.",
};

export const fitItems = [
  "You have ongoing design needs, but not enough to justify a full-time hire.",
  "You need both one-off projects and regular design support.",
  "You are a business looking to expand into APAC markets.",
  "You prefer a dedicated point of contact, instead of managing an agency or multiple freelancers.",
];

export type CarouselImage = { src: string; alt: string };

export type WorkCardData =
  | {
      type: "image";
      label: string;
      client: string;
      description: string;
      image: CarouselImage;
      link?: { href: string; label: string };
    }
  | {
      type: "carousel";
      label: string;
      client: string;
      description: string;
      images: CarouselImage[];
      contain?: boolean;
    };

export const workExamples: WorkCardData[] = [
  {
    type: "image",
    label: "Web & UI Design",
    client: "SG Alliance",
    description:
      "An insurance comparison microsite, redesigned to improve usability for both existing and prospective clients.",
    image: {
      src: "/assets/sg-alliance.png",
      alt: "Insurance comparison microsite for SG Alliance shown on a laptop",
    },
    link: { href: "https://easicompare.com/rep/generalinsurance", label: "View website →" },
  },
  {
    type: "carousel",
    label: "Digital Marketing Design Support",
    client: "H&M",
    description: "Social media assets for a global fashion campaign, produced for the Southeast Asian market.",
    images: [
      { src: "/assets/hm-1.jpg", alt: "H&M S/S 2024 kidswear campaign — four girls in white skirt sets" },
      { src: "/assets/hm-2.jpg", alt: "H&M S/S 2024 menswear campaign — model in a beige overshirt" },
      { src: "/assets/hm-3.jpg", alt: "H&M S/S 2024 womenswear campaign — model in a white shirt and silver skirt" },
      { src: "/assets/hm-4.jpg", alt: "H&M S/S 2024 womenswear campaign — model in a white broderie shirt on a stool" },
    ],
  },
  {
    type: "carousel",
    label: "APAC Design Localisation",
    client: "3M Healthcare",
    description: "Display advertising for the Japan market, adapted for local typography and messaging density.",
    images: [
      { src: "/assets/3m-1.jpg", alt: "3M Healthcare Japan display advertising featuring a nurse with a tablet" },
      { src: "/assets/3m-2.jpg", alt: "3M Healthcare Japan display advertising featuring a lab scientist" },
      { src: "/assets/3m-3.jpg", alt: "3M Healthcare Japan display advertising featuring a patient" },
    ],
    contain: true,
  },
];

export const footerMeta = {
  kvk: "KVK 97710512",
  uen: "UEN: 53523399W",
  emailDisplay: "CONTACT@MADODESIGN.CO",
  copyright: "© 2026 Mado Design",
};
