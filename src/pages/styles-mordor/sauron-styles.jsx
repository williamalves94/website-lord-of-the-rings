import styled from "styled-components";

export const Sauron = styled.section`
  background-color: #111111;
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
  padding: 40px;
`;

export const DivImgAndTextSauron = styled.div`
  display: flex;
  background-color: #111111;
  box-shadow: 12px 12px 20px 0px #00000085;
  margin-top: 20px;
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0px;
  }
`;

export const DivImgSauron = styled.div`
  flex: 2;
  border-radius: 4px;
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
  padding: 10px 20px 0px 20px;
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
  width: 100%;
  padding: 0px 45px 10px 45px;
  .image-three {
    @media (max-width: 480px) {
      margin-bottom: 20px;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ImageSauron = styled.div`
  display: flex;
  background-color: #111111;
  padding: 0 23px 20px 23px;
  //box-shadow: 12px 12px 20px 0px #00000085;
  border-radius: 4px;
  margin-bottom: 20px;
  img {
    width: 100%;
    box-shadow: 12px 12px 20px 0px #00000085;
    border-radius: 4px;
  }
`;
