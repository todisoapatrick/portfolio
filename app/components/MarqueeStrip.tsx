import { stack } from "@/data/portfolio";

export function MarqueeStrip() {
  return (
    <div className="relative -mx-4 rotate-[-2deg] overflow-hidden bg-[#202223] py-4 text-white">
      <div className="marquee flex w-max gap-8 text-2xl font-black">
        {[...stack, ...stack].map((item, index) => (
          <span className="flex items-center gap-8" key={`${item}-${index}`}>
            <span>{item}</span>
            <span className="text-[#caff55]">+</span>
          </span>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-3 bg-[#d8ff5f]" />
    </div>
  );
}
