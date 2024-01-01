import {
  Condado,
  DivMain,
  DivImg,
  DivText,
  //ImageIn,
  DivCondadoImg,
} from "../styles/condado-section-style";
import CondadoMain from "../assets/condadoimgs/condadomain.jpg";
import Condado1 from "../assets/condadoimgs/condado1.jpg";
import Condado2 from "../assets/condadoimgs/condado2.jpg";
import Condado3 from "../assets/condadoimgs/condado3.jpg";

export const CondadoSection = () => {
  return (
    <Condado>
      <p className="title-page">Terra Média</p>
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

      <DivCondadoImg>
        <img className="image-one" src={Condado1} />

        <img className="image-two" src={Condado2} />

        <img className="image-three" src={Condado3} />
      </DivCondadoImg>
    </Condado>
  );
};
