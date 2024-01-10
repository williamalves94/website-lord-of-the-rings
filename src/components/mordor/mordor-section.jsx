import { HeaderMordorSection } from "./header-mordor-section";
import { MordorMainSection } from "./mordor-main";
import { SauronSection } from "./sauron-section";
import { NazgulSection } from "./nazgul-section";
import { BalrogSection } from "../mordor/balrog-section";
import { OrcsSection } from "./orcs-section";
import { FooterMordorSection } from "../mordor/footer-mordor";
import { MordorEagleSection } from "../mordor/mordor-eagle-section";
import { useContext } from "react";
import { AllContext } from "../../context/context";

const MordorSection = () => {
  const { ModalMap, openModal, setOpenModal, handleCloseModal } =
    useContext(AllContext);

  return (
    <div>
      <ModalMap
        isOpen={openModal}
        handleCloseModal={handleCloseModal}
        onClose={(e) => setOpenModal(false)}
      />
      <HeaderMordorSection />
      <MordorEagleSection />
      <MordorMainSection />
      <SauronSection />
      <NazgulSection />
      <BalrogSection />
      <OrcsSection />
      <FooterMordorSection />
    </div>
  );
};

export default MordorSection;
