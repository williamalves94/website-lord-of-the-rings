import styled from "styled-components";

export const Condado = styled.section`
  height: auto;
  background-color: #1d1d1d;
  padding: 60px 60px 40px 60px;

  p {
    color: #f2ca53;
    font-size: 80px;
    margin-top: 20px;
    justify-content: center;
    display: flex;

    @media (max-width: 930px) {
      font-size: 45px;
      margin-top: 0px;
    }
    @media (max-width: 480px) {
      font-size: 70px;
      margin-top: 25px;
    }
  }
  @media (max-width: 480px) {
    font-size: 45px;
    margin-top: 0px;
    padding: 10px 25px 10px 2px;
  }
`;

export const DivMain = styled.div`
  margin-top: 40px;
  display: flex;
  height: auto;
  background-color: #1d1d1d; //0e0c0c
  flex-wrap: wrap;
  //border: 2px solid #f2ca53;
  box-shadow: 12px 12px 20px 0px #00000085; //00000086
  border-radius: 3px 3px 0px 0px;

  @media (max-width: 930px) {
    grid-template-columns: repeat(2, 1fr);
    flex-direction: column;
  }
`;

export const DivImg = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px 3px 0px 0px;
  }
`;

export const DivText = styled.div`
  width: auto;
  align-self: flex-start;
  padding: 10px;
  flex: 1;
  .title {
    justify-content: flex-start;
    color: #f2ca53;
    font-size: 60px;

    @media (max-width: 1713px) {
      font-size: 50px;
    }

    @media (max-width: 1170px) {
      font-size: 40px;
    }

    @media (max-width: 1100px) {
      font-size: 36px;
    }
  }

  p {
    color: #f2ca53; //F2CA53
    font-size: 40px;
    padding: 0 30px 0 30px;
    font-family: "Beau Rivage";
    letter-spacing: 1px;

    @media (max-width: 1713px) {
      font-size: 36px;
    }
    @media (max-width: 1580px) {
      font-size: 34px;
    }

    @media (max-width: 1580px) {
      font-size: 32px;
    }

    @media (max-width: 1445px) {
      font-size: 28px;
    }
    @media (max-width: 1170px) {
      font-size: 24px;
      margin-bottom: 10px;
    }

    @media (max-width: 1100px) {
      font-size: 21px;
    }

    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }
`;

export const DivCondadoImg = styled.div`
  display: flex;
  margin-top: 40px;
  @media (max-width: 930px) {
    font-size: 20px;
    flex-direction: column;
  }
  @media (max-width: 480px) {
    padding: 0px 10px 0px 10px;
  }
`;

export const ImageIn = styled.div`
  display: flex;
  flex: 1 1 1;
  background-color: #1d1d1d;
  margin: 0 15px 0 15px;
  @media (max-width: 480px) {
    margin: 15px 15px 15px 15px;
  }
  img {
    width: 100%;
    //border: 2px solid #f2ca53;
    border-radius: 2px;
    box-shadow: 12px 12px 20px 0px #0000009e;
  }
`;
