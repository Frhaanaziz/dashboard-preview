import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";
import ConversionsBar from "../charts/ConversionsBar";

const ConversionsSection = (props: ComponentPropsWithoutRef<"section">) => {
  return (
    <section {...props}>
      <Card>
        <CardHeader>
          <div className="flex items-end justify-between">
            <p className="h5">Conversions</p>

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
          <ConversionsBar />
        </CardContent>
      </Card>
    </section>
  );
};

export default ConversionsSection;
