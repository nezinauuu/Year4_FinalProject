import { PetNav } from "@/components/navbars/petNav";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full bg-gray-900 bg-cover">{children}</div>;
};

export default MainLayout;
