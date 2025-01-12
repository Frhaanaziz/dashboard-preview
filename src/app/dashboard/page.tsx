import AccountSection from "@/components/dashboard/AccountSection";
import ConversionsSection from "@/components/dashboard/ConversionsSection";
import EarningsSection from "@/components/dashboard/EarningsSection";
import GrossSalesSection from "@/components/dashboard/GrossSalesSection";
import StatsSection from "@/components/dashboard/StatsSection";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <>
      <StatsSection />

      <div className="mt-10 px-8 xl:grid xl:grid-cols-12 xl:gap-10">
        <div className="col-span-8 space-y-8">
          <GrossSalesSection />

          <div className="lg:grid lg:grid-cols-10 lg:gap-10">
            <EarningsSection className="lg:col-span-5" />
            <ConversionsSection className="col-span-5 mt-10 lg:mt-0" />
          </div>
        </div>

        <div className="col-span-4 mt-10 space-y-10 xl:mt-0">
          <AccountSection />

          <Card className="flex justify-between p-6">
            <div className="flex flex-col items-center justify-center">
              <p className="h3 text-color-2">750K</p>
              <p className="text-color-4">Website Visitors</p>
            </div>
            <Separator orientation="vertical" className="h-18 bg-slate-700" />
            <div className="flex flex-col items-center justify-center">
              <p className="h3 text-color-2">7,500</p>
              <p className="text-color-4">New Customers</p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Page;
