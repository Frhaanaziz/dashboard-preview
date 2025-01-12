"use client";

import { Area, AreaChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", sales: 186, cost: 80 },
  { month: "February", sales: 305, cost: 200 },
  { month: "March", sales: 237, cost: 120 },
  { month: "April", sales: 73, cost: 190 },
  { month: "May", sales: 209, cost: 130 },
  { month: "June", sales: 214, cost: 140 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    // color: "hsl(var(--chart-1))",
    color: "#3A57E8",
  },
  cost: {
    label: "Cost",
    // color: "hsl(var(--chart-2))",
    color: "#85C5FA",
  },
} satisfies ChartConfig;

export default function AreaSale() {
  return (
    <ChartContainer config={chartConfig} className="max-h-[314px] w-full">
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{ left: -10, right: 1 }}
      >
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={16}
          tick={{ stroke: "#5C6CA5", fontSize: 16, fontWeight: 100 }}
        />
        <XAxis
          dataKey="month"
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
          tick={{ stroke: "#5C6CA5", fontSize: 16, fontWeight: 100 }}
          stroke="#5C6CA5"
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <defs>
          <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-sales)" stopOpacity={1} />
            <stop
              offset="100%"
              stopColor="var(--color-sales)"
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient id="fillCost" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-cost)" stopOpacity={1} />
            <stop
              offset="39%"
              stopColor="var(--color-cost)"
              stopOpacity={0.59}
            />
            <stop offset="93%" stopColor="var(--color-cost)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          dataKey="cost"
          type="natural"
          fill="url(#fillCost)"
          fillOpacity={0.2}
          stroke="var(--color-cost)"
          stackId="a"
        />
        <Area
          dataKey="sales"
          type="natural"
          fill="url(#fillSales)"
          fillOpacity={0.2}
          stroke="var(--color-sales)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
}
