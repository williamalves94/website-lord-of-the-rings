import styled from "styled-components";

export const Balrog = styled.section`
  width: 100%;
  background-color: #111111;
  border-bottom: 2px solid #f2ca53;
`;

export const BalrogImageMain = styled.div`
  img {
    width: 100%;
    height: auto;
    border-bottom: 2px solid #f2ca53;
  }
`;

export const TitleBalrog = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  height: 100vh;
  margin-left: 100px;
  .title-Balrog {
    font-size: 220px;
    color: #312c2c;
    @media (max-width: 1777px) {
      font-size: 210px;
      margin-top: -320px;
    }
    @media (max-width: 1449px) {
      font-size: 160px;
      margin-top: -490px;
    }
    @media (max-width: 1137px) {
      font-size: 140px;
      margin-top: -600px;
    }
    @media (max-width: 1035px) {
      font-size: 120px;
      margin-top: -700px;
    }
    @media (max-width: 1035px) {
      font-size: 110px;
      margin-top: -780px;
      margin-left: -50px;
    }
    @media (max-width: 770px) {
      font-size: 100px;
      margin-top: -850px;
      margin-left: -50px;
    }
    @media (max-width: 480px) {
      font-size: 60px;
      margin-top: -1040px;
      margin-left: -70px;
    }
  }
`;

export const DivImgAndTextOne = styled.div`
  display: flex;
  padding: 40px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const DivImageBalrogOne = styled.div`
  border-radius: 4px;
  flex: 3;
  img {
    width: 100%;
    height: auto;
    border: 2px solid #f2ca53;
    border-radius: 4px;
  }
`;

export const DivTextBalrogOne = styled.div`
  border-radius: 4px;
  flex: 2;
  p {
    color: #f2ca53;
    font-size: 36px;
    padding: 40px;
    @media (max-width: 1476px) {
      font-size: 34px;
    }
    @media (max-width: 1410px) {
      font-size: 32px;
    }
    @media (max-width: 1345px) {
      font-size: 29px;
    }
    @media (max-width: 1240px) {
      font-size: 26px;
    }
    @media (max-width: 1140px) {
      font-size: 23px;
    }
    @media (max-width: 1041px) {
      font-size: 20px;
    }
    @media (max-width: 942px) {
      font-size: 17px;
    }
    @media (max-width: 843px) {
      font-size: 15px;
    }
  }
`;

export const DivImgAndTextTwo = styled.div`
  display: flex;
  padding: 40px;
  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const DivImageBalrogTwo = styled.div`
  border-radius: 4px;
  flex: 3;
  img {
    width: 100%;
    height: auto;
    border: 2px solid #f2ca53;
    border-radius: 4px;
  }
`;

export const DivTextBalrogTwo = styled.div`
  flex: 2;
  p {
    color: #f2ca53;
    font-size: 36px;
    padding: 40px;
    @media (max-width: 1516px) {
      font-size: 34px;
    }
    @media (max-width: 1455px) {
      font-size: 32px;
    }
    @media (max-width: 1380px) {
      font-size: 29px;
    }
    @media (max-width: 1276px) {
      font-size: 26px;
    }
    @media (max-width: 1173px) {
      font-size: 23px;
    }
    @media (max-width: 1071px) {
      font-size: 20px;
    }
    @media (max-width: 970px) {
      font-size: 17px;
    }
    @media (max-width: 864px) {
      font-size: 15px;
    }
    @media (max-width: 864px) {
      font-size: 14px;
    }
    @media (max-width: 769px) {
      font-size: 14px;
    }
  }
`;
