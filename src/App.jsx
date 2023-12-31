import React, { useState } from "react";

import { HeaderSection } from "./components/header-section";
import { HomeMain } from "./components/home-main";
import { CondadoSection } from "./components/condado-section";
import { FellowshipSection } from "./components/fellowship-section";
import { FooterFunc } from "./components/footer";
import { RingSection } from "./components/ring-section";
import { GollumSection } from "./components/gollum-section";
import { ModalMap } from "./components/modal-map";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <ModalMap
        isOpen={openModal}
        handleCloseModal={handleCloseModal}
        onClose={(e) => setOpenModal(false)}
      />
      <HeaderSection handleOpenModal={handleOpenModal} />
      <HomeMain />
      <CondadoSection />
      <FellowshipSection />
      <RingSection />
      <GollumSection />
      <FooterFunc />
    </div>
  );
};

export default App;
