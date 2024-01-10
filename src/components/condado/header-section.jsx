import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import {
  Head,
  NavHeader,
  LogoImg,
  MenuIcon,
} from "../../styles/styles-condado/header-style";
import LogoMain from "../../assets/logosf.png";
import { BiMenu } from "react-icons/bi";
import { AllContext, AllProvider } from "../../context/context";

export const HeaderSection = ({ handleOpenModal }) => {
  const { SidebarSection, sidebar, setSidebar, showSidebar } =
    useContext(AllContext);

  return (
    <Head>
      <LogoImg>
        <img src={LogoMain} />
      </LogoImg>
      <MenuIcon>
        <BiMenu onClick={showSidebar} />
        {sidebar && <SidebarSection active={setSidebar} />}
      </MenuIcon>

      <NavHeader>
        <Link to="/">
          <a href="#home">Terra Média</a>
        </Link>
        <p onClick={handleOpenModal} className="mapa">
          Mapa
        </p>

        <Link to="/mordor">
          <a>Mordor</a>
        </Link>
      </NavHeader>
    </Head>
  );
};
