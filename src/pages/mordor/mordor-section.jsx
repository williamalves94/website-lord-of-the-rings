
import { HeaderMordorSection } from './header-mordor-section';
import { MordorMainSection } from './mordor-main'
import { SauronSection } from '../mordor/sauron-section';
import { NazgulSection } from '../mordor/nazgul-section';
import { BalrogSection } from '../mordor/balrog-section';
import { OrcsSection } from '../mordor/orcs-section';
import { FooterMordorSection } from '../mordor/footer-mordor';

 const MordorSection = () => {
    return (
        <div>
            <HeaderMordorSection />
            <MordorMainSection />
            <SauronSection />
            <NazgulSection />
            <BalrogSection />
            <OrcsSection />
            <FooterMordorSection />
        </div>      
    );
}
 
export default MordorSection;