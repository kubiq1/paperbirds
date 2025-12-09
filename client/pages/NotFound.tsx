import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 py-16 text-sky-100">
      <div className="relative mb-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/20 via-sky-400/5 to-amber-200/10 shadow-[0_0_60px_rgba(56,189,248,0.8)]">
        <span className="text-2xl leading-none">✈</span>
        <div className="pointer-events-none absolute inset-px rounded-2xl border border-white/10" />
      </div>

      <h1 className="text-center text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
        The flock lost this route.
      </h1>
      <p className="mt-4 max-w-md text-center text-sm leading-relaxed text-sky-100/80">
        You&apos;ve flown beyond the mapped airspace. Return to the live birds
        field to continue exploring the paperplane animation.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-slate-900/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-100 shadow-[0_0_35px_rgba(15,23,42,0.95)] backdrop-blur-xl transition hover:border-sky-300 hover:bg-slate-900 hover:text-sky-50"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
        Back to birds field
      </Link>
    </main>
  );
};

export default NotFound;
