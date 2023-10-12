import { Gollum, ImageGollumMain, TitleGollum, DivImageAndTextgollum, DivImageGollum, DivTextGollum } from '../styles/gollum-section-style';
import GollumMain from '../assets/gollum/gollummain.jpg';
import Gollum1 from '../assets/gollum/gollum1.jpg';

export const GollumSection = () => {
    return (
      <Gollum>
        <ImageGollumMain>
          <TitleGollum>
            <p className='title-gollum'>Gollum</p>
            <p className='text-gollum'>Eles nos amaldiçoaram.. Nos chamaram de assasino.. Nos amaldiçoaram,<br></br>e nos jogaram fora!...
            E nós choramos precioso; onde estar o tal assasino?.... <br></br>E nos esqueceu do gosto de pão, do barulho das árvores ao redor do vento... 
            <br></br>E nós esqueceu até: do nosso nome... Meeeu preecciossoooooo...
            <br />Gollum, originalmente chamado de Sméagol (ou Trahald), foi a princípio um Grado,
            <br></br>um dos três primeiros tipos de Hobbit. <br></br>O nome Gollum foi derivado do som de sua tosse borbulhante e sufocante.<br></br> Sua vida se estendeu muito além de sua natureza, pelos efeitos de possuir o Um Anel. <br>
            </br> Sméagol tinha cerca de 589 anos quando morreu, uma idade notável para uma <br></br> criatura que já foi um Hobbit, mas ele havia sido deformado e distorcido em corpo e mente pela corrupção do Anel. Seu principal desejo era reaver o Anel que o escravizou, e ele o perseguiu por muitos anos depois que Bilbo Bolseiro encontrou na caverna de Gollum nas Montanhas Sombrias. Inadvertidamente, Gollum desempenharia um papel vital na derradeira Busca do Anel.</p>
          </TitleGollum>
          <img src={ GollumMain }/>            
        </ImageGollumMain>

        <DivImageAndTextgollum>
          <DivImageGollum>
            <img src={ Gollum1 } />
          </DivImageGollum>

          <DivTextGollum>
            <p>Sua vida se estendeu muito além de sua natureza, pelos efeitos de possuir o Um Anel. Sméagol tinha cerca de 589 anos quando morreu, uma idade notável para uma criatura que já foi um Hobbit, mas ele havia sido deformado e distorcido em corpo e mente pela corrupção do Anel. Seu principal desejo era reaver o Anel que o escravizou, e ele o perseguiu por muitos anos depois que Bilbo Bolseiro encontrou na caverna de Gollum nas Montanhas Sombrias. Inadvertidamente, Gollum desempenharia um papel vital na derradeira Busca do Anel.</p>
          </DivTextGollum>
        </DivImageAndTextgollum>
      </Gollum>
    );
  };