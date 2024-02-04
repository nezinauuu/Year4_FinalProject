import { PetNav } from "@/components/navbars/petNav";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-[url('../images/background-top.svg')] bg-cover">
      {children}
    </div>
  );
};

export default MainLayout;
