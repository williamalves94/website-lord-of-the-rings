import { createContext, useState } from "react";
import { SidebarSection } from "../components/condado/sidebar";

export const AllContext = createContext({});

export const AllProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <AllContext.Provider
      value={{ SidebarSection, sidebar, setSidebar, showSidebar }}
    >
      {children}
    </AllContext.Provider>
  );
};
