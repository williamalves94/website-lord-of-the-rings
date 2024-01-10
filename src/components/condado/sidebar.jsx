import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  DivSidebar,
  DivTags,
} from "../../styles/styles-condado/sidebar-styles";
import { AllContext } from "../../context/context";

export const SidebarSection = ({ active }) => {
  const { handleOpenModal } = useContext(AllContext);
  return (
    //<AllContext.Provider>
    <DivSidebar sidebar={active}>
      <DivTags>
        <Link to="/">
          <a>Terra Média</a>
        </Link>
        <p className="mapa-sidebar" onClick={handleOpenModal}>
          Mapa
        </p>
        <Link to="/mordor">
          <a>Mordor</a>
        </Link>
      </DivTags>
    </DivSidebar>
    //</AllContext.Provider>
  );
};
