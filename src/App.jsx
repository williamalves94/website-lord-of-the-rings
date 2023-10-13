

import { HeaderSection } from './components/header-section';
import { HomeMain } from './components/home-main';
import { CondadoSection } from './components/condado-section';
import { FellowshipSection } from './components/fellowship-section';
import { FooterFunc } from './components/footer';
import { RingSection } from './components/ring-section';
import { GollumSection } from './components/gollum-section';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return ( 
      <div>
        <HeaderSection />      
        <HomeMain />
        <CondadoSection />
        <FellowshipSection />
        <RingSection />
        <GollumSection />
        <FooterFunc />
      </div>
  )
}

export default App;
