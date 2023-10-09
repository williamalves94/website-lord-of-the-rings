import { Fellowship, ImageFellowship, DivMainFellowship, DivTextFellowship } from '../styles/fellowship-section-style';
import FellowshipImagemMain from '../assets/fellowshipmain.jpg';


export const FellowshipSection = () => {
    return (
      <Fellowship>
        <DivMainFellowship>
        <ImageFellowship>
            <img src={ FellowshipImagemMain }/>            
          </ImageFellowship>

          <DivTextFellowship>
            <p className='title-fellowship'>A Sociedade do Anel</p>
            <p>A Sociedade do Anel, com nove membros, foi criada em oposição aos nove Cavaleiros Negros de Sauron, e com o objetivo de destruir o Um Anel. Ela se constituía de Frodo Bolseiro, portador do Anel, de Sam Gamgi, fiel companheiro de Frodo, do mago Gandalf, o Cinzento, do elfo Legolas, do anão Gimli, dos homens Aragorn e Boromir, e dos dois jovens hobbits Merry Brandebuque e Pippin Tûk. A Sociedade representa as pessoas livres do oeste — Elfos, Anões, Homens e Hobbits, acompanhados de um mago</p>
          </DivTextFellowship>
        </DivMainFellowship>       
      </Fellowship>
    );
  };