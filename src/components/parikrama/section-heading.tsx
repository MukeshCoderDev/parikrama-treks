import { cn } from "@/lib/utils";

export function PkSectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-4", light ? "text-copper" : "text-copper")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05]",
          light ? "text-white" : "text-basalt",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 font-sans text-base font-light leading-relaxed md:text-lg",
            light ? "text-white/75" : "text-basalt/70",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
