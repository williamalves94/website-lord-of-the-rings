import { createContext, useEffect, useState } from "react";
import { SidebarSection } from "../components/condado/sidebar";
import { ModalMap } from "../components/condado/modal-map";
import { useLocation } from "react-router-dom";

export const AllContext = createContext({});

export const AllProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [openModal, setOpenModal] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);

  const handleClickLogo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.onscroll = () => {
    if (window.scrollY > 100) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    setSidebar(!sidebar);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <AllContext.Provider
      value={{
        SidebarSection,
        sidebar,
        setSidebar,
        showSidebar,
        ModalMap,
        openModal,
        setOpenModal,
        handleOpenModal,
        handleCloseModal,
        handleClickLogo,
        setScrollTop,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};
