import { Condado, DivMain, DivImg, DivText, ImageIn, DivCondadoImg } from '../styles/condado-section-style'
import CondadoMain from '../assets/condadopics/condadomain.jpg';
import Condado1 from '../assets/condadopics/condado1.jpg';
import Condado2 from '../assets/condadopics/condado2.jpg';
import Condado3 from '../assets/condadopics/condado3.jpg';

export const CondadoSection = () => {
    return (
      <Condado>
        <p>Terra Média</p>

        <DivMain>
          <DivImg>
            <img src={ CondadoMain }/>
          </DivImg>

          <DivText>
            <p className='title'>O Condado</p>
            <p>texto sera inserido aqui depois de pronto</p>
          </DivText>
        </DivMain>

        <DivCondadoImg>
          <ImageIn>
            <img src={ Condado1 } />
          </ImageIn>

          <ImageIn>
            <img src={ Condado2 } />
          </ImageIn>

          <ImageIn>
            <img src={ Condado3 } />
          </ImageIn>
        </DivCondadoImg>
      </Condado>
    );
  };