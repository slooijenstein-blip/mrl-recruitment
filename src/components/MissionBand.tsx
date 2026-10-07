import Image from "next/image";
import missionImage from "@/images/mission.jpg";
import { mission } from "@/lib/content";

export function MissionBand() {
  return (
    <section className="px-4 sm:px-6 lg:px-8" aria-labelledby="mission-heading">
      <div className="relative mx-auto min-h-[640px] w-full max-w-[1600px] overflow-hidden sm:min-h-[720px]">
        <Image
          src={missionImage}
          alt="Bright meeting room with a long white table and black chairs"
          fill
          sizes="(min-width: 1600px) 1600px, 100vw"
          className="object-cover object-center"
        />
        <div className="relative flex justify-center px-4 pb-28 pt-10 sm:px-10 sm:pb-36 sm:pt-16">
          <div className="w-full max-w-3xl bg-canvas px-6 py-14 text-center sm:px-16 sm:py-20">
            <h2
              id="mission-heading"
              className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium leading-none tracking-tight"
            >
              Our Mission
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg">{mission}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
