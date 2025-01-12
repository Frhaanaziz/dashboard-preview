import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";
import RadialEarnings from "../charts/RadialEarnings";

const EarningsSection = (props: ComponentPropsWithoutRef<"section">) => {
  return (
    <section {...props}>
      <Card>
        <CardHeader>
          <div className="flex items-end justify-between">
            <p className="h5">Earnings</p>

            <div className="my-auto hidden items-center gap-4 md:flex">
              <p className="text-color-4">This Week</p>
              <ChevronDown
                size={24}
                strokeWidth={1.4}
                className="text-zinc-500"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-5">
            <RadialEarnings />
            <div className="my-auto space-y-10">
              <div className="flex items-center gap-5">
                <div className="h-[13px] w-[13px] rounded-full bg-[#3A57E8]" />
                <div className="space-y-1">
                  <p className="text-color-4">Sales</p>
                  <p className="text-color-2">251K</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="h-[13px] w-[13px] rounded-full bg-[#85F4FA]" />
                <div className="space-y-1">
                  <p className="text-color-4">Accessories</p>
                  <p className="text-color-2">251K</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default EarningsSection;
