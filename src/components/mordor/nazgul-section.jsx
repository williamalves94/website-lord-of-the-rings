import {
  Nazgul,
  NazgulImageMain,
  DivImageAndTextNazgul,
  DivImageNazgul,
  DivTextNazgul,
  DivImageAndTextNazgulTwo,
  DivImageNazgulTwo,
  DivTextNazgulTwo,
  DivImageAndTextNazgulThree,
  DivImageNazgulThree,
  DivTextNazgulThree,
  DivImageAndTextNazgulFour,
  DivImageNazgulFour,
  DivTextNazgulFour,
  TitleNasgul,
  DivShadowNazgulOne,
  DivShadowNazgulTwo,
  DivShadowNazgulThree,
  DivShadowNazgulFour,
} from "../../styles/styles-mordor/nazgul-styles";
import NazgulMain from "../../assets/nazgul/nazgulmain.jpg";
import Nazgul1 from "../../assets/nazgul/nazgul1.jpg";
import Nazgul2 from "../../assets/nazgul/nazgul2.jpg";
import Nazgul3 from "../../assets/nazgul/nazgul3.jpg";
import Nazgul4 from "../../assets/nazgul/nazgul4.jpg";

export const NazgulSection = () => {
  return (
    <Nazgul>
      <NazgulImageMain>
        <TitleNasgul>
          <p className="title-nazgul">Nazgûl</p>
        </TitleNasgul>
        <img src={NazgulMain} />
      </NazgulImageMain>
      <DivShadowNazgulOne>
        <DivImageAndTextNazgul>
          <DivImageNazgul>
            <img src={Nazgul1} />
          </DivImageNazgul>
          <DivTextNazgul>
            <p>
              Os Nazgûl eram nove homens que sucumbiram ao poder de Sauron e
              quase atingiram a imortalidade como fantasmas, funcionários
              ligados ao poder do Um Anel. Os Nazgûl foram grandes reis dos
              homens que receberam nove Anéis de Poder. Com a forja do Um Anel,
              eles se tornaram escravos involuntários de Sauron e,
              eventualmente, seus principais tenentes. Depois de muitos anos o
              efeito dos anéis os transformaram em espectros invisíveis para
              todos menos para Sauron e para quem usasse o Um Anel.
            </p>
          </DivTextNazgul>
        </DivImageAndTextNazgul>
      </DivShadowNazgulOne>
      <DivShadowNazgulTwo>
        <DivImageAndTextNazgulTwo>
          <DivTextNazgulTwo>
            <p>
              Eles viajaram para o exterior cobertos com capas pretas e
              armaduras de prata que lhes deu forma. Eles eram considerados como
              os "... servos mais terríveis" de Sauron, sendo o mais notável
              entre eles o Rei bruxo de Angmar, o guerreiro mais mortal das
              forças de Mordor. Durante A Guerra do Anel no fim da Terceira Era,
              o um anel é destruído ao cair nas chamas na Montanha da Perdição,
              dando o fim de Sauron e a destruíção total de mordor.
            </p>
          </DivTextNazgulTwo>
          <DivImageNazgulTwo>
            <img src={Nazgul2} />
          </DivImageNazgulTwo>
        </DivImageAndTextNazgulTwo>
      </DivShadowNazgulTwo>

      <DivShadowNazgulThree>
        <DivImageAndTextNazgulThree>
          <DivImageNazgulThree>
            <img src={Nazgul3} />
          </DivImageNazgulThree>
          <DivTextNazgulThree>
            <p>
              Dentre os nove Nazgûl existentes apenas dois tem seus nomes
              conhecidos: Morgomir, a Sombra do Oeste, um Espectro do Anel menor
              que foi um segundo Rei Bruxo na conquista de Arnor e Khamûl, o
              Senhor do Leste, que governou Dol Guldur após Sauron mover-se rumo
              a Barad-dûr. Aos Nazgûl sem nome foram dados nomes não oficiais,
              tais como
            </p>
          </DivTextNazgulThree>
        </DivImageAndTextNazgulThree>
      </DivShadowNazgulThree>
      <DivShadowNazgulFour>
        <DivImageAndTextNazgulFour>
          <DivTextNazgulFour>
            <p>
              The Undying (O Imortal), The Tainted (O Contaminado), The Dark
              Marshal (O Marechal das Trevas), The Shadow Lord (O Senhor das
              Sombras), The Betrayer (O Traidor), The Dwimmerlaik (Senhor dos
              Nazgül), e The Knight of Umbar (O Cavaleiro da Umbar). A razão que
              fez Sauron ganhar uma "apoio" tão forte entre os homens do Oriente
              e do Sul foi, provavelmente, através dos esforços dos Espectros do
              Anel. Desta forma, seu plano para os Anéis de Poder foi, pelo
              menos, parcialmente bem-sucedido.
            </p>
          </DivTextNazgulFour>
          <DivImageNazgulFour>
            <img src={Nazgul4} />
          </DivImageNazgulFour>
        </DivImageAndTextNazgulFour>
      </DivShadowNazgulFour>
    </Nazgul>
  );
};
