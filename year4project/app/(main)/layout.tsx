import { PetNav } from "@/components/navbars/petNav";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-gradient-to-br from-gray-900 to-gray-800">
      {children}
    </div>
  );
};

export default MainLayout;
