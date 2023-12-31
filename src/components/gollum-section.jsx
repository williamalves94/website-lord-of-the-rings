import {
  Gollum,
  ImageGollumMain,
  TitleGollum,
  DivImageAndTextgollum,
  DivImageGollum,
  DivTextGollum,
  DivTwoImgGollum,
  ImagesGollum,
  DivCenterTextGollum,
  DivGollumShadow,
  DivTwoImageGollumShadow,
} from "../styles/gollum-section-style";
import GollumMain from "../assets/gollum/gollummain.jpg";
import Gollum1 from "../assets/gollum/gollum1.jpg";
import Gollum2 from "../assets/gollum/gollum2.jpg";
import Gollum3 from "../assets/gollum/gollum3.jpg";

export const GollumSection = () => {
  return (
    <Gollum>
      <ImageGollumMain>
        <TitleGollum>
          <p className="title-gollum">Gollum</p>
          <p className="text-gollum">
            Gollum, originalmente chamado de Smeagol (ou Trahald), <br></br>foi
            a princípio um Grado, um dos três primeiros tipos de Hobbit.{" "}
            <br></br>O nome Gollum foi derivado do som de sua tosse borbulhante
            e sufocante.
          </p>
        </TitleGollum>
        <img src={GollumMain} />
      </ImageGollumMain>
      <DivGollumShadow>
        <DivImageAndTextgollum>
          <DivImageGollum>
            <img src={Gollum1} />
          </DivImageGollum>

          <DivTextGollum>
            <p>
              Sua vida se estendeu muito além de sua natureza, pelos efeitos de
              possuir O Um Anel. Smeagol tinha cerca de 589 anos quando morreu,
              uma idade notável para uma criatura que já foi um Hobbit, mas ele
              havia sido deformado e distorcido em corpo e mente pela corrupção
              do Anel.
            </p>
          </DivTextGollum>
        </DivImageAndTextgollum>
      </DivGollumShadow>
      <DivTwoImageGollumShadow>
        <DivTwoImgGollum>
          <ImagesGollum>
            <img src={Gollum2} />
          </ImagesGollum>

          <DivCenterTextGollum>
            <p>
              Seu principal desejo era reaver o Anel que o escravizou, e ele o
              perseguiu por muitos anos depois que Bilbo Bolseiro encontrou na
              caverna de Gollum nas Montanhas Sombrias. Inadvertidamente, Gollum
              desempenharia um papel vital na derradeira Busca do Anel. Eles nos
              amaldiçoaram... Nos chamaram de assasino... Nos amaldiçoaram, e
              nos jogaram fora!... E nós choramos precioso; onde esta o tal
              assasino?... E nós esqueceu do gosto do pão, do barulho das
              árvores ao redor do vento... <br></br> E nós esqueceu até: do
              nosso nome... Meeeu preecioooooso...
            </p>
          </DivCenterTextGollum>

          <ImagesGollum>
            <img src={Gollum3} />
          </ImagesGollum>
        </DivTwoImgGollum>
      </DivTwoImageGollumShadow>
    </Gollum>
  );
};
