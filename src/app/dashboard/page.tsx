import EarningsSection from "@/components/dashboard/EarningsSection";
import GrossSalesSection from "@/components/dashboard/GrossSalesSection";
import StatsSection from "@/components/dashboard/StatsSection";

const Page = () => {
  return (
    <>
      <StatsSection />

      <div className="mt-10 px-8 xl:grid xl:grid-cols-12 xl:gap-10">
        <div className="col-span-8 space-y-8">
          <GrossSalesSection />

          <div className="lg:grid lg:grid-cols-10 lg:gap-10">
            <EarningsSection className="lg:col-span-5" />
            <div className="col-span-5 mt-10 lg:mt-0"></div>
          </div>
        </div>
        <div className="col-span-4"></div>
      </div>
    </>
  );
};

export default Page;
