import DashboardLayout from "@/components/layout/DashboardLayout";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
