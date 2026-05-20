"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setInterval>;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-primary-foreground bg-primary border-primary";
      case "in-progress":
        return "text-foreground bg-secondary border-border";
      case "pending":
        return "text-muted-foreground bg-muted border-border/50";
      default:
        return "text-muted-foreground bg-muted border-border/50";
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className="relative w-full h-[500px] flex items-center justify-center"
    >
      <div className="relative w-[500px] h-[500px] flex items-center justify-center">
        <div
          ref={orbitRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Orbital rings */}
          <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/15" />
          <div className="absolute w-[300px] h-[300px] rounded-full border border-primary/10" />
          <div className="absolute w-[200px] h-[200px] rounded-full border border-primary/5" />

          {/* Center glow */}
          <div className="absolute w-6 h-6 rounded-full bg-primary/40 animate-pulse shadow-soft" />
          <div className="absolute w-12 h-12 rounded-full bg-primary/10 animate-pulse" />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Pulse ring for related nodes */}
                {isPulsing && (
                  <div className="absolute -inset-2 rounded-full border-2 border-primary animate-ping opacity-70" />
                )}

                {/* Node icon */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isExpanded
                      ? "scale-125 bg-primary border-primary shadow-strong"
                      : isRelated
                      ? "bg-primary/20 border-primary/50 shadow-soft"
                      : "bg-card border-border/60 hover:border-primary/40 hover:shadow-soft"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isExpanded ? "text-primary-foreground" : isRelated ? "text-primary" : "text-primary/80"}`} />
                </div>

                {/* Node title */}
                <div
                  className={`absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium transition-all duration-300 ${
                    isExpanded ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-72 z-50">
                    <Card className="bg-card/95 backdrop-blur-lg border-primary/20 shadow-strong">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge className={getStatusStyles(item.status)}>
                            {item.status === "completed"
                              ? "COMPLETE"
                              : item.status === "in-progress"
                              ? "IN PROGRESS"
                              : "PENDING"}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {item.date}
                          </span>
                        </div>
                        <CardTitle className="text-sm text-foreground">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground mb-3">{item.content}</p>

                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1">
                            <Zap className="w-3 h-3 text-primary" />
                            <span className="text-xs text-muted-foreground">
                              Energy Level
                            </span>
                            <span className="text-xs font-bold text-foreground">{item.energy}%</span>
                          </div>
                          <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full transition-all duration-1000"
                              style={{ width: `${item.energy}%` }}
                            />
                          </div>
                        </div>

                        {item.relatedIds.length > 0 && (
                          <div className="border-t border-border/20 pt-2">
                            <div className="flex items-center gap-1 mb-1">
                              <Link className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">
                                Connected Nodes
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {item.relatedIds.map((relatedId) => {
                                const relatedItem = timelineData.find(
                                  (i) => i.id === relatedId
                                );
                                return (
                                  <Button
                                    key={relatedId}
                                    variant="outline"
                                    size="sm"
                                    className="h-6 text-xs border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40 bg-secondary/50"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleItem(relatedId);
                                    }}
                                  >
                                    {relatedItem?.title}
                                    <ArrowRight className="w-3 h-3 ml-1" />
                                  </Button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
