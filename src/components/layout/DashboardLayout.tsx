import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInput,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Notification from "../icons/notification";
import Message from "../icons/message";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex shrink-0 items-center justify-between bg-sidebar px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Separator
                orientation="vertical"
                className="mr-2 h-4 bg-sidebar-foreground"
              />
            </div>
            <SidebarInput placeholder="Search..." />
          </div>

          {/* ADD DROPDOWN ON MOBILE */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Image src="/images/flag.png" alt="flag" width={31} height={31} />
            <Notification width={24} height={24} className="shrink-0" />
            <Message className="shrink-0" />

            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/images/avatar.png" />
                <AvatarFallback>FR</AvatarFallback>
              </Avatar>
              <div>
                <p>John Doe</p>
                <p className="text-sm text-sidebar-foreground">Admin</p>
              </div>
            </div>
          </div>
        </header>
        <div>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
