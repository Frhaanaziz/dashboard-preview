"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ArrowUpRight from "../icons/arrow-up-right";

interface Props {
  percentage: number;
  amount: number;
  color: string;
}

export default function RadialStat({ percentage, amount, color }: Props) {
  const chartData = [{ amount, fill: "var(--color-amount)" }];

  const chartConfig = {
    amount: {
      label: "Amount",
      // color: "hsl(var(--chart-2))",
      color,
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="aspect-square min-h-[70px]">
      <RadialBarChart
        data={chartData}
        startAngle={90}
        endAngle={90 + percentage}
        innerRadius={33}
        outerRadius={42}
      >
        <ChartTooltip content={<ChartTooltipContent />} />
        <RadialBar dataKey="amount" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <ArrowUpRight
                    x={viewBox.cx ? viewBox.cx - 10 : undefined}
                    y={viewBox.cy ? viewBox.cy - 10 : undefined}
                  />
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
