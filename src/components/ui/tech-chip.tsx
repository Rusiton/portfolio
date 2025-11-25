import type { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface ChipOptions {
  label: string,
  icon: ReactNode,
  tooltip?: string,
}

export default function TechChip({ label, icon, tooltip = undefined }: ChipOptions) {

  if (tooltip) return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-lightest-onyx/20 text-foreground shadows text-sm shadow-sm hover:bg-lighter-onyx transition hover:-translate-y-1"
        >
          <span className="text-primary text-lg">{icon}</span>
          {label}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="select-none">{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  )

  return (
    <div
      className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-lightest-onyx/20 text-foreground shadows text-sm shadow-sm hover:bg-lighter-onyx transition hover:-translate-y-1"
    >
      <span className="text-primary text-lg">{icon}</span>
      {label}
    </div>
  );
}