import { HeaderSection } from './components/header-section';
import { HomeMain } from './components/home-main';
import { CondadoSection } from './components/condado-section';
import { FellowshipSection } from './components/fellowship-section';
import { FooterFunc } from './components/footer';


const App = () => {
  return (  
      <div>
        <HeaderSection />      
        <HomeMain />
        <CondadoSection />
        <FellowshipSection />
        <FooterFunc />
      </div>
  )
}

export default App
