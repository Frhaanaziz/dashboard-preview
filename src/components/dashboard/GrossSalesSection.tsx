import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AreaSale from "../charts/AreaSale";
import { ChevronDown } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

const GrossSalesSection = (props: ComponentPropsWithoutRef<"section">) => {
  return (
    <section {...props}>
      <Card>
        <CardHeader>
          <div className="flex items-end justify-between">
            <div>
              <p className="h5">$855.8K</p>
              <p className="text-color-4">Gross Sales</p>
            </div>

            <div className="my-auto flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-[13px] w-[13px] rounded-full bg-primary" />
                <p className="text-color-4">Sales</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-[13px] w-[13px] rounded-full bg-secondary" />
                <p className="text-color-4">Cost</p>
              </div>
            </div>
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
          <AreaSale />
        </CardContent>
      </Card>
    </section>
  );
};

export default GrossSalesSection;
