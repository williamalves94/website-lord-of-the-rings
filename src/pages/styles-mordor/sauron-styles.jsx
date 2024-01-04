import styled from "styled-components";

export const Sauron = styled.section`
  background-color: #1d1d1d;
  width: 100%;
  height: auto;
`;

export const TitleSauron = styled.div`
  display: flex;
  justify-content: center;
  p {
    color: #f2ca52;
    text-shadow: 10px 5px 6px black;
    font-size: 100px;
    margin-top: 10px;
    margin-bottom: -20px;
  }
`;

export const DivShadowSauron = styled.div`
  display: flex;
  padding: 10px 60px 30px 60px;
  @media (max-width: 480px) {
    padding: 10px 30px 28px 30px;
  }
`;

export const DivImgAndTextSauron = styled.div`
  display: flex;
  background-color: #111111;
  box-shadow: 12px 12px 20px 0px #00000086;
  //margin-top: 20px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const DivImgSauron = styled.div`
  flex: 2;
  border-radius: 3px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    @media (max-width: 480px) {
      flex-direction: column;
      padding: 0px;
      border: none;
    }
  }
`;

export const DivTextSauron = styled.div`
  flex: 1;
  font-size: 38px;
  color: #f2ca52;
  padding: 10px 20px 10px 20px;
  p {
    @media (max-width: 1600px) {
      font-size: 35px;
    }
    @media (max-width: 1475px) {
      font-size: 32px;
    }
    @media (max-width: 1350px) {
      font-size: 28px;
    }
    @media (max-width: 1217px) {
      font-size: 25px;
    }
    @media (max-width: 1125px) {
      font-size: 22px;
    }
    @media (max-width: 1024px) {
      font-size: 18px;
    }
    @media (max-width: 890px) {
      font-size: 14px;
    }
    @media (max-width: 750px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

export const DivThreeImgSauron = styled.div`
  display: flex;
  width: auto;
  padding: 10px 60px 50px 60px;
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 10px 30px 30px 30px;
  }

  .image-one {
    @media (max-width: 480px) {
      margin: 0 0 33px 0;
    }
  }
  .image-two {
    margin: 0 30px 0 30px;
    @media (max-width: 480px) {
      margin: 0 0 38px 0;
    }
  }
  .image-three {
    @media (max-width: 480px) {
      margin: 0 0 30px 0;
    }
  }
`;

export const ImageSauron = styled.div`
  display: flex;
  background-color: #1d1d1d;
  img {
    width: 100%;
    box-shadow: 12px 12px 20px 0px #00000086;
    border-radius: 3px;
  }
`;
