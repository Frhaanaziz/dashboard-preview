import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ComponentPropsWithoutRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import BuyTheme from "../icons/buy-theme";
import BagTheme from "../icons/bag-theme";
import { Badge } from "../ui/badge";
import Link from "next/link";

const AccountSection = (props: ComponentPropsWithoutRef<"section">) => {
  return (
    <section {...props}>
      <Card className="overflow-hidden">
        <CardContent className="bg-[#21293F] px-0">
          <div className="relative py-10">
            <Image
              src="/images/ellipse-126.svg"
              alt=""
              width={244}
              height={335}
              className="absolute left-0 top-0"
            />
            <Image
              src="/images/ellipse-127.svg"
              alt=""
              width={242}
              height={309}
              className="absolute bottom-0 right-0"
            />
            <div className="mx-6 rounded-[24px] border-[.1px] border-black p-6 text-white backdrop-blur-xl">
              <div className="flex items-start justify-between">
                <div>
                  <p className="h3 font-bold">VISA</p>
                  <p className="text-sm uppercase">PREMIUM ACCOUNT</p>
                </div>
                <Image
                  src="/images/visa-logo.png"
                  alt="Visa"
                  width={116}
                  height={71}
                />
              </div>

              <p className="h4 my-12">
                <span>57899</span>
                <span className="ml-8">****</span>
                <span className="ml-8">****</span>
                <span className="ml-8">2847</span>
              </p>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[11px]">Card Holder</p>
                  <p className="h5 mt-1">John Doe</p>
                </div>
                <div>
                  <p className="text-[11px]">Expire date</p>
                  <p className="h5 mt-1">06/21</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="block">
          <div className="mb-6 flex items-start gap-10">
            <div className="flex items-start gap-4">
              <BuyTheme />
              <div>
                <p className="h6 mb-1">1153</p>
                <p className="text-color-2 text-xs">Products</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BagTheme />
              <div>
                <p className="h6 mb-1">1153</p>
                <p className="text-color-2 text-xs">Products</p>
              </div>
            </div>
          </div>

          <div className="mb-2 flex items-start justify-between">
            <p className="h3 text-color-3">$405,012,300</p>
            <Badge className="rounded-full bg-green-600 text-sm font-normal">
              YoY 24%
            </Badge>
          </div>

          <Link href="#" className="mb-6 block text-secondary">
            Life time sales
          </Link>

          <div className="flex justify-between gap-10">
            <Button className="flex-1" color="primary">
              View Project
            </Button>
            <Button variant="secondary" className="flex-1">
              Analytics
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default AccountSection;
