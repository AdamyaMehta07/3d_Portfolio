import { profile } from "@/data/resume";
import HeroSceneLoader from "@/components/HeroSceneLoader";

export default function Home() {
  const [role, focus, how] = profile.tagline;

  return (
    <>
      <HeroSceneLoader />
      <main className="relative z-10 min-h-screen px-8 pt-[calc(var(--bar)+2rem)] pb-[calc(var(--bar)+2rem)] flex flex-col justify-between pointer-events-none">
        <p className="text-lime">REEL 01 / SCENE 01</p>

        <div>
          <h1 className="font-display text-[18vw] leading-[0.85] uppercase">
            Adamya
            <br />
            <span className="text-lime">Mehta</span>
          </h1>
          <p className="mt-6 max-w-md uppercase tracking-widest text-sm">
            {role} <span className="text-lime">{focus}</span> {how}
          </p>
        </div>

        <p className="opacity-60">00:00:00:00</p>
      </main>
            <section className="relative z-10 min-h-[150vh] px-8 pt-[calc(var(--bar)+2rem)] pointer-events-none">
        <p className="text-lime">REEL 01 / SCENE 02</p>
        <h2 className="font-display text-[12vw] leading-[0.85] uppercase mt-8">
          Test <span className="text-lime">scroll</span>
        </h2>
      </section>
    </>
  );
}