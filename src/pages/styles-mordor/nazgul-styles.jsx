import styled from "styled-components";

export const Nazgul = styled.div`
  background-color: #111111;
  width: 100%;
  height: auto;
  border-bottom: 2px solid gray;
`;

export const NazgulImageMain = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    width: 100%;
    height: auto;
    border-bottom: 2px solid gray;
  }
`;

export const TitleNasgul = styled.div`
  display: flex;
  //align-items: center;
  position: absolute;
  margin-top: 280px;
  margin-right: 250px;
  height: 100vh;
  .title-nazgul {
    font-size: 200px;
    color: #000;
    @media (max-width: 1690px) {
      font-size: 180px;
      margin-top: -40px;
    }
    @media (max-width: 1534px) {
      font-size: 170px;
      margin-top: -70px;
      margin-right: -80px;
    }
    @media (max-width: 1400px) {
      font-size: 150px;
      margin-top: -70px;
      margin-right: -80px;
    }
    @media (max-width: 1230px) {
      font-size: 130px;
      margin-top: -100px;
      margin-right: -120px;
    }
    @media (max-width: 1100px) {
      font-size: 100px;
      margin-top: -120px;
      margin-right: -160px;
    }
    @media (max-width: 900px) {
      font-size: 100px;
      margin-top: -150px;
      margin-right: -160px;
    }
    @media (max-width: 790px) {
      font-size: 90px;
      margin-top: -170px;
      margin-right: -180px;
    }
    @media (max-width: 769px) {
      font-size: 90px;
      margin-top: -170px;
      margin-right: -180px;
    }
    @media (max-width: 480px) {
      font-size: 60px;
      margin-top: -200px;
      margin-right: -250px;
    }
  }
`;

export const DivImageAndTextNazgul = styled.div`
  display: flex;
`;

export const DivImageNazgul = styled.div`
  flex: 3;
  padding: 40px 30px 30px 30px;
  img {
    width: 100%;
    height: auto;
    border: 2px solid gray;
    border-radius: 4px;
  }
`;
export const DivTextNazgul = styled.div`
  flex: 2;
  p {
    color: gray;
    font-size: 36px;
    padding: 40px;
  }
`;

export const DivImageAndTextNazgulTwo = styled.div`
  display: flex;
  padding: 30px;
`;

export const DivImageNazgulTwo = styled.div`
  flex: 3;
  img {
    width: 100%;
    height: auto;
    border: 2px solid gray;
    border-radius: 4px;
  }
`;

export const DivTextNazgulTwo = styled.div`
  flex: 2;
  p {
    color: gray;
    font-size: 36px;
    padding: 40px;
  }
`;

export const DivImageAndTextNazgulThree = styled.div`
  display: flex;
  padding: 30px;
`;

export const DivImageNazgulThree = styled.div`
  flex: 3;
  img {
    width: 100%;
    height: auto;
    border: 2px solid gray;
    border-radius: 4px;
  }
`;

export const DivTextNazgulThree = styled.div`
  flex: 2;
  p {
    color: gray;
    font-size: 36px;
    padding: 40px;
  }
`;

export const DivImageAndTextNazgulFour = styled.div`
  display: flex;
  padding: 30px;
`;

export const DivImageNazgulFour = styled.div`
  flex: 3;
  img {
    width: 100%;
    height: auto;
    border: 2px solid gray;
    border-radius: 4px;
  }
`;

export const DivTextNazgulFour = styled.div`
  flex: 2;
  p {
    color: gray;
    font-size: 36px;
    padding: 40px;
  }
`;
