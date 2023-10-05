import { HeaderSection } from './components/header-section';
import { HomeMain } from './components/home-main';
import { CondadoSection } from './components/condado-section';
import { OtherSection } from './components/other-section';

import { FooterFunc } from './components/footer';



const App = () => {
  return (  
      <div>
        <HeaderSection />      
        <HomeMain />
        <CondadoSection />
        <OtherSection />
        <FooterFunc />
      </div>
  )
}

export default App
