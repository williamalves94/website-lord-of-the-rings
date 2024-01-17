import React, { useContext } from "react";
import { HeaderSection } from "./components/condado/header-section";
import { HomeMain } from "./components/condado/home-main";
import { CondadoSection } from "./components/condado/condado-section";
import { FellowshipSection } from "./components/condado/fellowship-section";
import { FooterFunc } from "./components/condado/footer";
import { RingSection } from "./components/condado/ring-section";
import { GollumSection } from "../src/components/condado/gollum-section";
import { AllContext } from "./context/context";

const App = () => {
  const { ModalMap, openModal, setOpenModal, handleCloseModal } =
    useContext(AllContext);

  return (
    <div>
      <ModalMap
        isOpen={openModal}
        handleCloseModal={handleCloseModal}
        onClose={(e) => setOpenModal(false)}
      />
      <HeaderSection />
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
