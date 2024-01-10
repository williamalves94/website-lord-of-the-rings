import { HeaderMordorSection } from "./header-mordor-section";
import { MordorMainSection } from "./mordor-main";
import { SauronSection } from "./sauron-section";
import { NazgulSection } from "./nazgul-section";
import { BalrogSection } from "../mordor/balrog-section";
import { OrcsSection } from "./orcs-section";
import { FooterMordorSection } from "../mordor/footer-mordor";
import { MordorEagleSection } from "../mordor/mordor-eagle-section";
import { useContext } from "react";
import { AllContext, AllProvider } from "../../context/context";

const MordorSection = () => {
  const { ModalMap, opneModal, setOpenModal, handleCloseModal } =
    useContext(AllContext);

  return (
    <div>
      <AllProvider>
        <ModalMap
          isOpen={opneModal}
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
      </AllProvider>
    </div>
  );
};

export default MordorSection;
//<HeaderMordorSection />
