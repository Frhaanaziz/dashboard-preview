"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const ConversionsBar = () => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 50 },
    { month: "February", desktop: 305, mobile: 72 },
    { month: "March", desktop: 237, mobile: 104 },
    { month: "April", desktop: 73, mobile: 62 },
    { month: "May", desktop: 209, mobile: 150 },
    { month: "June", desktop: 214, mobile: 138 },
  ];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#85F4FA",
    },
    mobile: {
      label: "Mobile",
      color: "#3A57E8",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="max-h-[210px] w-full">
      <BarChart accessibilityLayer data={chartData} margin={{ left: -30 }}>
        <CartesianGrid vertical={false} stroke="#5C6CA5" />
        <YAxis tickLine={false} axisLine={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 1)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel nameKey="month" />}
        />
        <Bar
          dataKey="mobile"
          stackId="a"
          fill="var(--color-mobile)"
          barSize="3%"
        />
        <Bar
          dataKey="desktop"
          stackId="a"
          fill="var(--color-desktop)"
          barSize="3%"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default ConversionsBar;
