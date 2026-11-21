export default function FilmOverlay() {
  return (
    <>
      <div className="grain" aria-hidden />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-40 flex items-center justify-between bg-ink px-8 text-[10px] uppercase tracking-[0.25em] text-bone/50"
        style={{ height: "var(--bar)" }}
      >
        <span className="flex items-center gap-2">
          <span className="rec-dot inline-block size-1.5 rounded-full bg-lime" />
          Rec
        </span>
        <span>2.39:1</span>
      </div>

      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex items-center justify-between bg-ink px-8 text-[10px] uppercase tracking-[0.25em] text-bone/50"
        style={{ height: "var(--bar)" }}
      >
        <span>Adamya Mehta</span>
        <span>Showreel 2026</span>
      </div>
    </>
  );
}