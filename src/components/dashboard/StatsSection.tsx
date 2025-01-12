import Voice from "@/components/icons/voice";
import { Card, CardContent } from "@/components/ui/card";
import RadialStat from "../charts/RadialStat";

const StatsSection = () => {
  const stats = [
    { title: "Total Sales", amount: 560, percentage: 340, color: "#3A57E8" },
    { title: "Total Profit", amount: 185, percentage: 300, color: "#08B1BA" },
    { title: "Total Cost", amount: 375, percentage: 250, color: "#3A57E8" },
    { title: "Revenue", amount: 742, percentage: 200, color: "#08B1BA" },
    { title: "Net Income", amount: 150, percentage: 170, color: "#3A57E8" },
    { title: "Today", amount: 4600, percentage: 120, color: "#08B1BA" },
    // { title: "Another", amount: "$600", percentage: 20, color: "#3A57E8" },
    // { title: "Something", amount: "$700K", percentage: 10, color: "#08B1BA" },
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
              <RadialStat {...stat} />
              <div>
                <p className="text-color-2">{stat.title}</p>
                <p className="h5 mt-4">${stat.amount}K</p>
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
