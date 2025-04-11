
import React from "react";

export const MovingBorderDiv = ({
  children,
  containerClassName,
  duration = 4000, // Default value is now provided
  rx = "10px",
  ry = "10px",
  borderRadius = "1rem",
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  duration?: number;
  rx?: string;
  ry?: string;
  borderRadius?: string;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        className={`absolute inset-0 pointer-events-none rounded-[${borderRadius}]`}
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="border-gradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(65,105,225,0.62)" />
            <stop offset="50%" stopColor="rgba(65,105,225,0.8)" />
            <stop offset="100%" stopColor="rgba(65,105,225,0.62)" />
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx={rx}
          ry={ry}
          fill="none"
          stroke="url(#border-gradient)"
          strokeWidth="3"
          style={{
            animation: `rotate ${duration}ms linear infinite`,
            transformOrigin: "center",
          }}
        />
      </svg>
      <div className={containerClassName}>{children}</div>
    </div>
  );
};
