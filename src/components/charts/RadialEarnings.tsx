"use client";

import { RadialBar, RadialBarChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const RadialEarnings = () => {
  const chartData = [
    { type: "fashion", amount: 300, fill: "var(--color-fashion)" },
    { type: "accessories", amount: 149, fill: "var(--color-accessories)" },
  ];

  const chartConfig = {
    fashion: {
      label: "Fashion",
      color: "hsl(var(--primary))",
    },
    accessories: {
      label: "Accessories",
      color: "hsl(var(--secondary))",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-square min-h-[210px]"
    >
      <RadialBarChart
        data={chartData}
        startAngle={90}
        endAngle={450}
        innerRadius={70}
        outerRadius={126}
        barCategoryGap="35%"
      >
        <ChartTooltip
          content={<ChartTooltipContent hideLabel nameKey="type" />}
        />
        <RadialBar dataKey="amount" background cornerRadius={10} />
      </RadialBarChart>
    </ChartContainer>
  );
};

export default RadialEarnings;
