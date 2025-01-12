import Voice from "@/components/icons/voice";
import { Card, CardContent } from "@/components/ui/card";
import RadialStat from "../charts/RadialStat";

const StatsSection = () => {
  const stats = [
    { title: "Total Sales", value: 560, percentage: 340 },
    { title: "Total Profit", value: 185, percentage: 300 },
    { title: "Total Cost", value: 375, percentage: 250 },
    { title: "Revenue", value: 742, percentage: 200 },
    { title: "Net Income", value: 150, percentage: 170 },
    { title: "Today", value: 4600, percentage: 120 },
    // { title: "Another", value: "$600", percentage: 20 },
    // { title: "Something", value: "$700K", percentage: 10 },
  ];

  return (
    <section className="h-[200px] rounded-b-2xl bg-[url(/images/graphic-slide.png)] bg-cover px-8 pt-4">
      <div className="mb-8 sm:mb-14">
        <div className="flex items-start justify-between">
          <h1 className="h3 sm:h2">Hello Devs!</h1>
          <div className="self hidden items-center gap-4 rounded bg-white/10 px-6 py-2 shadow-lg backdrop-blur sm:flex">
            <Voice />
            <p>Announcments</p>
          </div>
        </div>
        <p className="text-lg font-medium sm:text-xl">
          We are on a mission to help developers like yout to build beautiful
          projects for FREE
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="flex flex-1 items-center gap-6 pt-6">
              <RadialStat amount={stat.value} percentage={stat.percentage} />
              <div>
                <p className="text-color-2">{stat.title}</p>
                <p className="h5 mt-4">${stat.value}K</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {stats.map((stat) => (
            <CarouselItem key={stat.title} className="lg:basis-1/6">
              <Card>
                <CardContent className="flex flex-1 items-center gap-6 pt-6">
                  <RadialStat />
                  <div>
                    <p className="text-color-2">{stat.title}</p>
                    <p className="h5 mt-4">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel> */}
    </section>
  );
};

export default StatsSection;
