import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Head, NavHeader, LogoImg } from "../styles/header-style";
import LogoMain from "../assets/logosf.png";

export const HeaderSection = () => {
  return (
    <Head>
      <LogoImg>
        <img src={LogoMain} />
      </LogoImg>
      <NavHeader>
        <Link to="/">
          <a>Terra Média</a>
        </Link>
        <p
          onClick={() => {
            setOpenModal(true);
          }}
          className="mapa"
        >
          Mapa
        </p>

        <Link to="/mordor">
          <a>Mordor</a>
        </Link>
      </NavHeader>
    </Head>
  );
};
