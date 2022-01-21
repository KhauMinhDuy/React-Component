import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";

const LayoutNoThemProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      {children}
    </div>
  );
};

const Layout = ({ startTheme, children }) => {
  return (
    <ThemeProvider startTheme={startTheme}>
      <LayoutNoThemProvider>{children}</LayoutNoThemProvider>
    </ThemeProvider>
  );
};

export default Layout;
