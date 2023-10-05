import { Condado, DivMain, DivImg, DivText } from '../styles/condado-section-style'
import CondadoMain from '../assets/condadopics/img1.jpg';

export const CondadoSection = () => {
    return (
      <Condado>
        <p>Terra Média</p>
        <DivMain>
          <DivImg>
            <img src={ CondadoMain }/>
          </DivImg>
          <DivText>
            <p>Condado</p>
            <p>texto sera inserido aqui depois de pronto</p>
          </DivText>
        </DivMain>
      </Condado>
    );
  };