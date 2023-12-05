import React from "react";
import { Link } from "react-router-dom";
import { DivSidebar, DivTags } from "../styles/sidebar-styles";

export const SidebarSection = ({ active }) => {
  return (
    <DivSidebar sidebar={active}>
      <DivTags>
        <Link to="/">
          <a>Terra Média</a>
        </Link>
        <p href="">Mapa</p>
        <Link to="/mordor">
          <a>Mordor</a>
        </Link>
      </DivTags>
    </DivSidebar>
  );
};
