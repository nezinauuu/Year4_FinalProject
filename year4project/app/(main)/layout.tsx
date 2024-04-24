import { PetNav } from "@/components/navbars/petNav";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return <div className=" bg-gray-200 bg-cover">{children}</div>;
};

export default MainLayout;
