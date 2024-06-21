import { BentoGrid, BentoGridItem } from "@/components/magicui/BentoGrid";
import BlurIn from "@/components/magicui/BlurIn";
import { BorderBeam } from "@/components/magicui/BorderBeam";
import AnimatedGradientText from "@/components/magicui/GradientText";
import WordFadeIn from "@/components/magicui/WordFadeIn";
import { cn } from "@/lib/utils";
import { ChevronRight, Clipboard, MapPin, Martini } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-12 flex flex-col justify-between items-center">
      <div className="flex flex-col gap-12">
        <BlurIn
          content="Night Gather"
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
          duration={0.5}
        />
        <WordFadeIn
          words="L'application qui te permet de trouver une soirée à tout moment !"
          className="text-xl md:text-3xl bg-gradient-to-r from-primary via-secondary to-accent inline-block text-transparent bg-clip-text"
        />
        <BlurIn
          content={
            <BentoGrid className="max-w-4xl mx-auto">
              {items.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  className={"!bg-secondary"}
                  beam={
                    <BorderBeam size={50} duration={12} delay={1 * i + 1} />
                  }
                />
              ))}
            </BentoGrid>
          }
        />
      </div>
      <div className="flex gap-8">
        <BlurIn
          content={
            <div className="z-10 flex items-center justify-center">
              <Link href={"/auth/register"}>
                <AnimatedGradientText>
                  <span
                    className={cn(
                      `inline animate-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    )}
                  >
                    Inscription
                  </span>
                  <ChevronRight className="ml-1 text-black size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
              </Link>
            </div>
          }
        />
        <BlurIn
          content={
            <div className="z-10 flex items-center justify-center">
              <Link href={"/auth/login"}>
                <AnimatedGradientText>
                  <span
                    className={cn(
                      `inline animate-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    )}
                  >
                    Connexion
                  </span>
                  <ChevronRight className="ml-1 text-black size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
              </Link>
            </div>
          }
        />
      </div>
    </main>
  );
}

const items = [
  {
    title: "Participe à des soirée",
    description:
      "Soirée chill, Projet X, à theme, jeux de socitée, LAN pour les gamers.",
    icon: <Martini className="h-4 w-4 text-white" />,
  },
  {
    title: "Organise tes propres soirée",
    description: "Tu peux organiser des soirée privée entre amis ou public.",
    icon: <Clipboard className="h-4 w-4 text-white" />,
  },
  {
    title: "Soirée proche de chez toi.",
    description: "Des soirée son disponible partout en France à tout moment.",
    icon: <MapPin className="h-4 w-4 text-white" />,
  },
];
