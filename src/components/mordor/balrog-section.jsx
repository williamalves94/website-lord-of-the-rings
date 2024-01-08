import {
  Balrog,
  BalrogImageMain,
  TitleBalrog,
  DivImgAndTextOne,
  DivImageBalrogOne,
  DivTextBalrogOne,
  DivImgAndTextTwo,
  DivImageBalrogTwo,
  DivTextBalrogTwo,
  DivShadowBalrogOne,
  DivShadowBalrogTwo,
} from "../../styles/styles-mordor/balrog-styles";
import BalrogMain from "../../assets/balrog/balrogmain.jpg";
import Balrog2 from "../../assets/balrog/balrog2.jpg";
import Balrog3 from "../../assets/balrog/balrog3.jpg";

export const BalrogSection = () => {
  return (
    <Balrog>
      <BalrogImageMain>
        <TitleBalrog>
          <p className="title-Balrog">Balrog</p>
        </TitleBalrog>
        <img src={BalrogMain} />
      </BalrogImageMain>
      <DivShadowBalrogOne>
        <DivImgAndTextOne>
          <DivImageBalrogOne>
            <img src={Balrog2} />
          </DivImageBalrogOne>
          <DivTextBalrogOne>
            <p>
              Os Balrog eram Maiar seduzidos por Melkor, ou Morgoth, no início
              de Arda, e que residiam em sua fortaleza no norte, Utumno. Os
              balrogs e Sauron, que também eram Maiar, tornaram-se os mais
              sinistros dos servos de Melkor, especialmente nas guerras de
              Beleriand na Primeira Era. Morgoth corrompeu esses Maiar ao seu
              serviço e vontade.
            </p>
          </DivTextBalrogOne>
        </DivImgAndTextOne>
      </DivShadowBalrogOne>

      <DivShadowBalrogTwo>
        <DivImgAndTextTwo>
          <DivTextBalrogTwo>
            <p>
              Existiam entre três e sete Balrogs, mas de acordo com o filho de
              Tolkien, nunca houve realmente mais do que sete Balrogs. No
              entanto, em diversos textos há referências a "exércitos" de
              Balrogs. Gothmog era seu capitão. O Balrog foi um grande
              antagonista da trilogia do Senhor dos Anéis. Sua personalidade é
              demoníaca, agindo sempre de forma irracional, mesmo seguindo
              ordens.
            </p>
          </DivTextBalrogTwo>
          <DivImageBalrogTwo>
            <img src={Balrog3} />
          </DivImageBalrogTwo>
        </DivImgAndTextTwo>
      </DivShadowBalrogTwo>
    </Balrog>
  );
};
