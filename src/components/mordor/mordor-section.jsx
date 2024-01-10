import { HeaderMordorSection } from "./header-mordor-section";
import { MordorMainSection } from "./mordor-main";
import { SauronSection } from "./sauron-section";
import { NazgulSection } from "./nazgul-section";
import { BalrogSection } from "../mordor/balrog-section";
import { OrcsSection } from "./orcs-section";
import { FooterMordorSection } from "../mordor/footer-mordor";
import { MordorEagleSection } from "../mordor/mordor-eagle-section";

const MordorSection = () => {
  return (
    <div>
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
//<HeaderMordorSection />
