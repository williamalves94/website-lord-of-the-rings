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
  margin-right: 230px;
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
      margin-right: -100px;
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
      font-size: 55px;
      margin-top: -200px;
      margin-left: 20px;
    }
  }
`;

export const DivImageAndTextNazgul = styled.div`
  display: flex;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const DivImageNazgul = styled.div`
  flex: 3;
  padding: 20px 20px 0px 20px;
  img {
    width: 100%;
    height: auto;
    border: 2px solid gray;
    border-radius: 4px;
  }
`;
export const DivTextNazgul = styled.div`
  flex: 2;
  @media (max-width: 769px) {
    margin-top: -30px;
  }
  p {
    color: gray;
    font-size: 36px;
    padding: 40px 40px 10px 40px;
    @media (max-width: 1840px) {
      font-size: 30px;
    }
    @media (max-width: 1550px) {
      font-size: 27px;
    }
    @media (max-width: 1415px) {
      font-size: 24px;
    }
    @media (max-width: 1260px) {
      font-size: 21px;
    }
    @media (max-width: 1121px) {
      font-size: 18px;
    }
    @media (max-width: 989px) {
      font-size: 16px;
    }
    @media (max-width: 900px) {
      font-size: 14px;
    }
    @media (max-width: 829px) {
      font-size: 13px;
    }
    @media (max-width: 769px) {
      font-size: 13px;
    }
  }
`;

export const DivImageAndTextNazgulTwo = styled.div`
  display: flex;
  padding: 20px 20px 10px 20px;
  @media (max-width: 480px) {
    flex-direction: column-reverse;
    margin-top: -20px;
  }
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
    padding: 40px 20px 20px 20px;
    @media (max-width: 1840px) {
      font-size: 30px;
    }
    @media (max-width: 1557px) {
      font-size: 27px;
    }
    @media (max-width: 1420px) {
      font-size: 24px;
    }
    @media (max-width: 1310px) {
      font-size: 21px;
    }
    @media (max-width: 1178px) {
      font-size: 19px;
    }
    @media (max-width: 1073px) {
      font-size: 17px;
    }
    @media (max-width: 1000px) {
      font-size: 15px;
    }
    @media (max-width: 900px) {
      font-size: 13px;
    }
    @media (max-width: 790px) {
      font-size: 12px;
    }
    @media (max-width: 769px) {
      font-size: 12px;
    }
    @media (max-width: 480px) {
      margin-top: -30px;
    }
  }
`;

export const DivImageAndTextNazgulThree = styled.div`
  display: flex;
  padding: 20px 20px 0px 20px;
  @media (max-width: 480px) {
    flex-direction: column;
    margin-top: -40px;
  }
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
    padding: 40px 20px 20px 20px;
    @media (max-width: 1655px) {
      font-size: 32px;
    }
    @media (max-width: 1500px) {
      font-size: 30px;
    }
    @media (max-width: 1425px) {
      font-size: 27px;
    }
    @media (max-width: 1305px) {
      font-size: 24px;
    }
    @media (max-width: 1189px) {
      font-size: 21px;
    }
    @media (max-width: 1073px) {
      font-size: 18px;
    }
    @media (max-width: 961px) {
      font-size: 15px;
    }
    @media (max-width: 845px) {
      font-size: 13px;
    }
    @media (max-width: 769px) {
      font-size: 13px;
    }
    @media (max-width: 480px) {
      margin-top: -30px;
    }
  }
`;

export const DivImageAndTextNazgulFour = styled.div`
  display: flex;
  padding: 20px 20px 0px 20px;
  flex-direction: column-reverse;
  @media (max-width: 480px) {
    margin-top: -30px;
  }
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
    padding: 20px 20px 20px 20px;
    @media (max-width: 1655px) {
      font-size: 32px;
    }
    @media (max-width: 1500px) {
      font-size: 30px;
    }
    @media (max-width: 1425px) {
      font-size: 27px;
    }
    @media (max-width: 1305px) {
      font-size: 24px;
    }
    @media (max-width: 1189px) {
      font-size: 21px;
    }
    @media (max-width: 1073px) {
      font-size: 18px;
    }
    @media (max-width: 961px) {
      font-size: 15px;
    }
    @media (max-width: 845px) {
      font-size: 13px;
    }
    @media (max-width: 769px) {
      font-size: 13px;
    }
    @media (max-width: 480px) {
      margin-top: -10px;
    }
  }
`;
