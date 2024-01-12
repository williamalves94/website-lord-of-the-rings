import {
  Condado,
  DivMain,
  DivImg,
  DivText,
  //ImageIn,
  //DivCondadoImg,
  DivThreeImages,
  ImageOne,
  ImageTwo,
  ImageThree,
} from "../../styles/styles-condado/condado-section-style";
import CondadoMain from "../../assets/condadoimgs/condadomain.jpg";
import Condado1 from "../../assets/condadoimgs/condado1.jpg";
import Condado2 from "../../assets/condadoimgs/condado2.jpg";
import Condado3 from "../../assets/condadoimgs/condado3.jpg";

export const CondadoSection = () => {
  return (
    <Condado>
      <DivMain>
        <DivImg>
          <img src={CondadoMain} />
        </DivImg>

        <DivText>
          <p className="title">O Condado</p>
          <p>
            O Condado é a terra natal dos Hobbits. A região fica localizada no
            noroeste da Terra-Média, na região de Eriador e dentro do reinado de
            Arnor, enquanto o reino existiu.<br></br>
          </p>
        </DivText>
      </DivMain>

      <DivThreeImages>
        <ImageOne>
          <img src={Condado1} />
        </ImageOne>

        <ImageTwo>
          <img src={Condado2} />
        </ImageTwo>

        <ImageThree>
          <img src={Condado3} />
        </ImageThree>
      </DivThreeImages>
    </Condado>
  );
};

//<p className="title-page">Terra Média</p>
