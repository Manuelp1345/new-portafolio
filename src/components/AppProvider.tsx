import React from "react";
import ResponsiveAppBar from "./AppBar";

const AppProvider = ({ children }: { children: React.JSX.Element }) => {
  return (
    <>
      <ResponsiveAppBar />
      {children}
    </>
  );
};

export default AppProvider;
