import Image from "next/image";
import heroImage from "@/images/hero.jpg";
import { CtaBand } from "@/components/CtaBand";
import { MissionBand } from "@/components/MissionBand";
import { ServiceColumns } from "@/components/ServiceColumns";

export default function HomePage() {
  return (
    <>
      <section className="px-4 pt-2 sm:px-6 lg:px-8" aria-label="Introduction">
        <div className="relative mx-auto h-[68vh] min-h-[520px] w-full max-w-[1600px] max-h-[820px] overflow-hidden">
          <Image
            src={heroImage}
            alt="Modern office lounge with grey seating, wood floors, and tall windows"
            fill
            preload
            placeholder="blur"
            sizes="(min-width: 1600px) 1600px, 100vw"
            className="object-cover object-[center_30%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.28)_36%,rgba(255,255,255,0)_68%)]"
          />
          <div className="relative flex h-full items-center justify-center px-6">
            <h1 className="text-center text-[clamp(2.8rem,6.6vw,5.8rem)] font-medium leading-[1.02] tracking-tight text-ink">
              Smart Hiring
              <span className="mt-1 block">Stronger Teams</span>
            </h1>
          </div>
        </div>
      </section>
      <ServiceColumns />
      <MissionBand />
      <CtaBand />
    </>
  );
}
