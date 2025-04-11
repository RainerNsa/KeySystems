import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#05071E] to-[#000080] top-0 left-0">
      {/* Large Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:120px_120px]",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
        )}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#05071E] to-[#000080] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
      {children}
    </div>
  );
}
