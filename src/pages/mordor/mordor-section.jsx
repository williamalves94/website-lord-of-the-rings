import { MordorMainSection } from './mordor-main'
import { HeaderMordorSection } from './header-mordor-section';
import { NazgulSection } from '../mordor/nazgul-section';

 const MordorSection = () => {
    return (
        <div>
            <HeaderMordorSection />
            <MordorMainSection />
            <NazgulSection />
        </div>
            
       
    );
}
 
export default MordorSection;