import GrossSalesSection from "@/components/dashboard/GrossSalesSection";
import StatsSection from "@/components/dashboard/StatsSection";

const Page = () => {
  return (
    <>
      <StatsSection />

      <div className="mt-10 px-8 xl:grid xl:grid-cols-12 xl:gap-10">
        <div className="col-span-8 space-y-8">
          <GrossSalesSection />
        </div>
        <div className="col-span-4"></div>
      </div>
    </>
  );
};

export default Page;
