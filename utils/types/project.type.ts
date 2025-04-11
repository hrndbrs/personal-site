export type Project = {
  title: string;
  description: string;
  image: string;
  tags: Tag[];
  link: string;
  githubUrl?: string;
};

export enum Tag {
  NEXTJS = "Next.js",
  TYPESCRIPT = "TypeScript",
  TAILWIND = "Tailwind CSS",
  SHADCN = "Shadcn/ui",
  GSAP = "GSAP",
  NEXT_INTL = "Next-intl",
  FRAMER_MOTION = "Framer Motion",
  PWA = "PWA",
}
