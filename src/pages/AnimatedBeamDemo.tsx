import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-card p-3 shadow-medium",
        className,
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

const AnimatedBeamDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div
        className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border border-border bg-card p-10"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              <span className="text-xs font-bold text-foreground">G</span>
            </Circle>
            <Circle ref={div5Ref}>
              <span className="text-xs font-bold text-foreground">N</span>
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}>
              <span className="text-xs font-bold text-foreground">W</span>
            </Circle>
            <Circle ref={div4Ref} className="h-16 w-16">
              <span className="text-sm font-bold text-primary">AI</span>
            </Circle>
            <Circle ref={div6Ref}>
              <span className="text-xs font-bold text-foreground">Z</span>
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <span className="text-xs font-bold text-foreground">M</span>
            </Circle>
            <Circle ref={div7Ref}>
              <span className="text-xs font-bold text-foreground">D</span>
            </Circle>
          </div>
        </div>

        <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} />
        <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
        <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} endYOffset={10} />
        <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} reverse />
        <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse />
        <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} curvature={75} endYOffset={10} reverse />
      </div>
    </div>
  );
};

export default AnimatedBeamDemo;
