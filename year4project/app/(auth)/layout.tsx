const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('../images/background-top.svg')] bg-cover">
      {children}
    </div>
  );
};

export default AuthLayout;
