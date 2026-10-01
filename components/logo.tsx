import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-sans text-lg font-extrabold tracking-tight whitespace-nowrap",
        className,
      )}
    >
      perfect
      {/* <span className="font-light opacity-80">Communications</span> */}
    </span>
  );
}
