import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { Calculator, DollarSign, TrendingUp, AlertTriangle, Calendar } from "lucide-react";

const ROICalculator = () => {
  const [leadsPerMonth, setLeadsPerMonth] = useState(200);
  const [avgDealValue, setAvgDealValue] = useState(5000);
  const [currentCloseRate, setCurrentCloseRate] = useState(8);

  const currentRevenue = leadsPerMonth * (currentCloseRate / 100) * avgDealValue;
  const improvedCloseRate = Math.min(currentCloseRate * 2.5, 50);
  const projectedRevenue = leadsPerMonth * (improvedCloseRate / 100) * avgDealValue;
  const revenueLeak = projectedRevenue - currentRevenue;
  const roiMultiple = projectedRevenue / Math.max(currentRevenue, 1);

  return (
    <section id="calculator" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/40 bg-card/30 text-sm text-muted-foreground mb-6">
            <Calculator className="w-4 h-4 text-primary" />
            Interactive Calculator
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Revenue Leak &{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">ROI Calculator</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how much revenue you're leaving on the table — and what Flowstra AI can recover.
          </p>
        </motion.div>

        {/* Spline 3D + Calculator Card */}
        <Card className="w-full max-w-6xl mx-auto bg-card/40 border-border/30 backdrop-blur-sm relative overflow-hidden rounded-2xl">

          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Left: 3D Robot */}
            <div className="relative h-[300px] lg:h-full">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>

            {/* Right: Calculator */}
            <div className="p-6 lg:p-8 flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Your Current Numbers</h3>

              {/* Leads per month */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Leads per Month</span>
                  <span className="text-foreground font-semibold">{leadsPerMonth}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={leadsPerMonth}
                  onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-soft"
                />
              </div>

              {/* Avg deal value */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Avg Deal Value</span>
                  <span className="text-foreground font-semibold">${avgDealValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-soft"
                />
              </div>

              {/* Current close rate */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Current Close Rate</span>
                  <span className="text-foreground font-semibold">{currentCloseRate}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={currentCloseRate}
                  onChange={(e) => setCurrentCloseRate(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-soft"
                />
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl border border-border/30 bg-background/50">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Current</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">${currentRevenue.toLocaleString()}</p>
                </div>

                <div className="p-3 rounded-xl border border-destructive/30 bg-destructive/5">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-destructive" />
                    <span className="text-xs text-destructive/80">Leaking</span>
                  </div>
                  <p className="text-lg font-bold text-destructive">${revenueLeak.toLocaleString()}</p>
                </div>

                <div className="p-3 rounded-xl border border-primary/30 bg-primary/5">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs text-primary/80">Projected</span>
                  </div>
                  <p className="text-lg font-bold text-primary">${projectedRevenue.toLocaleString()}</p>
                  <p className="text-[10px] text-muted-foreground">{roiMultiple.toFixed(1)}x ROI</p>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-strong transition-all duration-300 text-base py-6 rounded-xl group"
                onClick={() => window.open("https://cal.com/ayush-yadav/15min?overlayCalendar=true", "_blank")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Claim Your Revenue — Book a Call
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ROICalculator;
