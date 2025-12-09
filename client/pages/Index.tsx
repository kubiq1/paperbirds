import { useMemo, useState } from "react";
import { Settings } from "lucide-react";
import { BirdsBackground } from "../components/BirdsBackground";

function numberToHex(value: number) {
  return `#${value.toString(16).padStart(6, "0")}`;
}

function mapQuantitySliderToVanta(sliderValue: number): number {
  return 3 + (sliderValue - 1) * (2 / 6);
}

export default function Index() {
  const [backgroundColor, setBackgroundColor] = useState(0x1a193e);
  const [color1, setColor1] = useState(0xc4bfe8);
  const [color2, setColor2] = useState(0x1bb2c5);
  const [birdSize, setBirdSize] = useState(1.3);
  const [speedLimit, setSpeedLimit] = useState(3.5);
  const [quantity, setQuantity] = useState(7);
  const [separation, setSeparation] = useState(80);
  const [alignment, setAlignment] = useState(53);
  const [cohesion, setCohesion] = useState(16);
  const [wingSpan, setWingSpan] = useState(16);
  const [isControlsOpen, setIsControlsOpen] = useState(false);

  const mappedQuantity = useMemo(
    () => mapQuantitySliderToVanta(quantity),
    [quantity],
  );

  const vantaConfig = useMemo(
    () => ({
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      backgroundColor,
      color1,
      color2,
      colorMode: "lerpGradient",
      birdSize,
      speedLimit,
      quantity: mappedQuantity,
      separation,
      alignment,
      cohesion,
      wingSpan,
    }),
    [
      backgroundColor,
      color1,
      color2,
      birdSize,
      speedLimit,
      mappedQuantity,
      separation,
      alignment,
      cohesion,
      wingSpan,
    ],
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <BirdsBackground config={vantaConfig} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.16),transparent_60%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_50%_100%,rgba(0,0,0,0.55),transparent_65%)] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.55)] via-[rgba(0,0,0,0.35)] to-[rgba(1,12,32,0.95)]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 pt-6 sm:px-10 sm:pt-8">
          <div className="flex items-center gap-3 text-sm font-medium tracking-[0.2em] text-sky-100/80 uppercase">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-sky-300 to-amber-200 shadow-[0_0_40px_rgba(56,189,248,0.85)]">
              <span className="text-lg leading-none text-slate-950">✈</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.7rem] text-sky-100/70">AERIAL MESSAGING STUDIO</span>
              <span className="text-xs tracking-[0.25em] text-sky-50">PAPERBIRD</span>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-xs font-medium text-sky-100/80 sm:flex">
            <span className="rounded-full border border-white/15 bg-slate-950/30 px-4 py-1.5 tracking-[0.18em] text-[0.7rem] uppercase shadow-[0_0_30px_rgba(15,23,42,0.8)] backdrop-blur-xl">
              Live flight visual
            </span>
          </div>
        </header>

        <section className="flex flex-1 flex-col justify-end px-6 pb-12 pt-10 sm:px-10 sm:pb-16 sm:pt-16 lg:px-20 lg:pb-24">
          <div className="max-w-xl space-y-6 sm:space-y-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-200/25 bg-slate-950/40 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-sky-100/80 shadow-[0_0_30px_rgba(15,23,42,0.9)] backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Flight path optimized • Real-time swarm dynamics
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 drop-shadow-[0_18px_45px_rgba(15,23,42,0.95)] sm:text-5xl sm:leading-tight md:text-6xl">
              Seamless aerial messaging,
              <span className="block bg-gradient-to-r from-sky-200 via-sky-100 to-amber-100 bg-clip-text text-transparent">
                orchestrated by a flock of paper birds.
              </span>
            </h1>

            <p className="max-w-lg text-sm leading-relaxed text-sky-100/80 sm:text-base sm:leading-relaxed">
              A production-grade recreation of the Vanta Birds paperplane field: tuned cohesion, separation, and speed to feel impossibly smooth, without sacrificing performance or clarity.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-sky-100/70 sm:mt-12">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 shadow-[0_0_30px_rgba(15,23,42,0.8)] backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.9)]" />
              BIRDS EFFECT · ALIGNMENT 20 · SPEED LIMIT 5
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/30 px-3 py-1.5 shadow-[0_0_30px_rgba(15,23,42,0.7)] backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-200 shadow-[0_0_12px_rgba(253,230,138,0.9)]" />
              PAPER PLANE SWARM · QUANTITY 5 · WINGSPAN 30
            </div>
          </div>
        </section>

        {!isControlsOpen && (
          <button
            onClick={() => setIsControlsOpen(true)}
            className="pointer-events-auto fixed bottom-4 right-4 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-sky-400 to-sky-500 shadow-[0_8px_32px_rgba(56,189,248,0.6)] transition-all duration-200 hover:scale-110 hover:shadow-[0_12px_48px_rgba(56,189,248,0.8)]"
            title="Open birds field controls"
          >
            <Settings className="h-6 w-6 text-slate-950" />
          </button>
        )}

        <aside
          className={`pointer-events-auto fixed bottom-4 right-4 z-20 w-full max-w-xs rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-xs text-sky-100 shadow-[0_18px_45px_rgba(15,23,42,0.95)] backdrop-blur-xl transition-all duration-200 ${
            isControlsOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[0.65rem] font-semibold tracking-[0.24em] uppercase text-sky-200/90">
                Birds field controls
              </span>
              <span className="text-[0.65rem] text-sky-200/70">
                Tweak Vanta parameters live
              </span>
            </div>
            <button
              onClick={() => setIsControlsOpen(false)}
              className="text-sky-100/60 transition-colors hover:text-sky-100"
              title="Close controls"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] text-sky-100/80">Quantity</span>
                <span className="text-[0.65rem] text-sky-100/60">{quantity.toFixed(0)}</span>
              </div>
              <input
                type="range"
                min={1}
                max={7}
                step={0.5}
                value={quantity}
                onChange={(event) => setQuantity(parseFloat(event.target.value))}
                className="w-full accent-sky-400"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] text-sky-100/80">Bird size</span>
                <span className="text-[0.65rem] text-sky-100/60">{birdSize.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min={0.5}
                max={4}
                step={0.1}
                value={birdSize}
                onChange={(event) => setBirdSize(parseFloat(event.target.value))}
                className="w-full accent-sky-300"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] text-sky-100/80">Wing span</span>
                <span className="text-[0.65rem] text-sky-100/60">{wingSpan.toFixed(0)}</span>
              </div>
              <input
                type="range"
                min={5}
                max={80}
                step={1}
                value={wingSpan}
                onChange={(event) => setWingSpan(parseFloat(event.target.value))}
                className="w-full accent-sky-200"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] text-sky-100/80">Speed limit</span>
                <span className="text-[0.65rem] text-sky-100/60">{speedLimit.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min={1}
                max={12}
                step={0.5}
                value={speedLimit}
                onChange={(event) => setSpeedLimit(parseFloat(event.target.value))}
                className="w-full accent-amber-300"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] text-sky-100/80">Separation</span>
                <span className="text-[0.65rem] text-sky-100/60">{separation.toFixed(0)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={80}
                step={1}
                value={separation}
                onChange={(event) => setSeparation(parseFloat(event.target.value))}
                className="w-full accent-emerald-300"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] text-sky-100/80">Alignment</span>
                <span className="text-[0.65rem] text-sky-100/60">{alignment.toFixed(0)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={80}
                step={1}
                value={alignment}
                onChange={(event) => setAlignment(parseFloat(event.target.value))}
                className="w-full accent-indigo-300"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] text-sky-100/80">Cohesion</span>
                <span className="text-[0.65rem] text-sky-100/60">{cohesion.toFixed(0)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={80}
                step={1}
                value={cohesion}
                onChange={(event) => setCohesion(parseFloat(event.target.value))}
                className="w-full accent-pink-300"
              />
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1">
              <label className="flex flex-col gap-1">
                <span className="text-[0.6rem] text-sky-100/70">Background</span>
                <input
                  type="color"
                  value={numberToHex(backgroundColor)}
                  onChange={(event) =>
                    setBackgroundColor(parseInt(event.target.value.slice(1), 16))
                  }
                  className="h-7 w-full cursor-pointer rounded border border-white/15 bg-transparent p-0"
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-[0.6rem] text-sky-100/70">Bird 1</span>
                <input
                  type="color"
                  value={numberToHex(color1)}
                  onChange={(event) =>
                    setColor1(parseInt(event.target.value.slice(1), 16))
                  }
                  className="h-7 w-full cursor-pointer rounded border border-white/15 bg-transparent p-0"
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-[0.6rem] text-sky-100/70">Bird 2</span>
                <input
                  type="color"
                  value={numberToHex(color2)}
                  onChange={(event) =>
                    setColor2(parseInt(event.target.value.slice(1), 16))
                  }
                  className="h-7 w-full cursor-pointer rounded border border-white/15 bg-transparent p-0"
                />
              </label>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
