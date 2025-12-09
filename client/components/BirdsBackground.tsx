import { useEffect, useRef } from "react";

interface VantaBirdsConfig {
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  scale: number;
  scaleMobile: number;
  backgroundColor: number;
  color1: number;
  color2: number;
  colorMode: string;
  birdSize: number;
  speedLimit: number;
  quantity: number;
  separation: number;
  alignment: number;
  cohesion: number;
  wingSpan: number;
}

interface BirdsBackgroundProps {
  className?: string;
  config: VantaBirdsConfig;
}

declare global {
  interface Window {
    VANTA?: any;
    THREE?: any;
  }
}

export function BirdsBackground({ className, config }: BirdsBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>(
          `script[src="${src}"]`,
        );
        if (existing && existing.dataset.loaded === "true") {
          resolve();
          return;
        }

        const script = existing ?? document.createElement("script");
        script.src = src;
        script.async = true;
        script.dataset.loaded = "false";
        script.onload = () => {
          script.dataset.loaded = "true";
          resolve();
        };
        script.onerror = (error) => {
          reject(error);
        };

        if (!existing) {
          document.body.appendChild(script);
        }
      });

    const initVanta = () => {
      if (!window.VANTA || !window.VANTA.BIRDS) {
        return;
      }

      if (cancelled) {
        return;
      }

      const safeConfig = {
        mouseControls: !!config.mouseControls,
        touchControls: !!config.touchControls,
        gyroControls: !!config.gyroControls,
        minHeight: Math.max(0, Math.floor(config.minHeight)),
        minWidth: Math.max(0, Math.floor(config.minWidth)),
        scale: Math.max(0.1, config.scale),
        scaleMobile: Math.max(0.1, config.scaleMobile),
        backgroundColor: config.backgroundColor & 0xffffff,
        color1: config.color1 & 0xffffff,
        color2: config.color2 & 0xffffff,
        colorMode: config.colorMode,
        birdSize: Math.max(0.1, config.birdSize),
        speedLimit: Math.max(0.1, config.speedLimit),
        quantity: Math.max(1, Math.min(100, Math.floor(config.quantity))),
        separation: Math.max(0, Math.min(80, Math.floor(config.separation))),
        alignment: Math.max(0, Math.min(80, Math.floor(config.alignment))),
        cohesion: Math.max(0, Math.min(80, Math.floor(config.cohesion))),
        wingSpan: Math.max(1, Math.min(120, Math.floor(config.wingSpan))),
      };

      if (vantaRef.current) {
        try {
          if (typeof vantaRef.current.setOptions === "function") {
            vantaRef.current.setOptions(safeConfig);
            return;
          }
          vantaRef.current.destroy();
        } catch (error) {
          console.error("Error updating existing Vanta Birds effect:", error);
          try {
            vantaRef.current.destroy();
          } catch {
            // ignore
          }
        }
      }

      try {
        vantaRef.current = window.VANTA.BIRDS({
          el: container,
          ...safeConfig,
        });

        if (vantaRef.current && typeof vantaRef.current.setOptions === "function") {
          vantaRef.current.setOptions(safeConfig);
        }
      } catch (error) {
        console.error("[PAPERBIRD] Vanta Birds init failed:", error);
        vantaRef.current = null;
      }
    };

    const setup = async () => {
      try {
        if (!window.THREE) {
          await loadScript(
            "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js",
          );
        }

        if (!window.VANTA || !window.VANTA.BIRDS) {
          await loadScript(
            "https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.birds.min.js",
          );
        }

        if (!cancelled) {
          initVanta();
        }
      } catch (error) {
        console.error("Error initialising Vanta Birds:", error);
      }
    };

    setup();

    return () => {
      cancelled = true;
      if (vantaRef.current && typeof vantaRef.current.destroy === "function") {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, [config]);

  return (
    <div
      id="vanta"
      ref={containerRef}
      className={
        className ??
        "absolute inset-0 w-full h-full [transform:translateZ(0)] will-change-transform"
      }
    />
  );
}
