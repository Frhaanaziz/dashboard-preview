import Voice from "@/components/icons/voice";
import { Card, CardContent } from "@/components/ui/card";
import RadialStat from "../charts/RadialStat";
import { ComponentPropsWithoutRef } from "react";

const StatsSection = (props: ComponentPropsWithoutRef<"section">) => {
  const stats = [
    {
      title: "Total Sales",
      amount: 560,
      percentage: 340,
      color: "hsl(var(--primary))",
    },
    {
      title: "Total Profit",
      amount: 185,
      percentage: 300,
      color: "hsl(var(--secondary))",
    },
    {
      title: "Total Cost",
      amount: 375,
      percentage: 250,
      color: "hsl(var(--primary))",
    },
    {
      title: "Revenue",
      amount: 742,
      percentage: 200,
      color: "hsl(var(--secondary))",
    },
    {
      title: "Income",
      amount: 150,
      percentage: 170,
      color: "hsl(var(--primary))",
    },
    {
      title: "Today",
      amount: 460,
      percentage: 120,
      color: "hsl(var(--secondary))",
    },
  ];

  return (
    <section {...props}>
      <div className="h-[200px] rounded-b-2xl bg-[url(/images/graphic-slide.png)] bg-cover px-8 pt-4">
        <div className="flex items-start justify-between">
          <h1 className="h3 sm:h2">Hello Devs!</h1>
          <div className="hidden sm:flex sm:items-center sm:gap-4 sm:rounded sm:bg-white/10 sm:px-6 sm:py-2 sm:shadow-lg sm:backdrop-blur">
            <Voice />
            <p>Announcments</p>
          </div>
        </div>
        <p className="text-lg font-medium sm:text-xl">
          We are on a mission to help developers like yout to build beautiful
          projects for FREE
        </p>
      </div>

      <div className="-mt-10 grid grid-cols-1 gap-10 px-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="flex flex-1 items-center gap-6 pt-6">
              <RadialStat {...stat} />
              <div>
                <p className="text-color-2">{stat.title}</p>
                <p className="h5 mt-4">${stat.amount}K</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
