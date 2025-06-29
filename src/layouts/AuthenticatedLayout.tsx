import React from 'react';


type Props = {
  children: React.ReactNode;
};

const AuthenticatedLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default AuthenticatedLayout;
