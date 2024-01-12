import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: auto;
  margin-top: 80px;
  //border: 2px solid yellow;
  color: #fff;
  display: flex;
  //align-items: center;
  justify-content: center;
  position: absolute;
  position: fixed;
  z-index: 1000;

  img {
    //antes era 1200 por 850
    width: 1150px;
    height: 800px;
    //justify-content: flex-end;
    //border: 2px solid #f2ca53;
    @media (max-width: 2000px) {
      width: 1050px;
      height: 700px;
    }
    @media (max-width: 1700px) {
      width: 1100px;
      height: 750px;
    }
    @media (max-width: 1500px) {
      width: 1050px;
      height: 700px;
    }
    @media (max-width: 1400px) {
      width: 1000px;
      height: 650px;
    }
    @media (max-width: 1300px) {
      width: 950px;
      height: 600px;
    }
    @media (max-width: 1200px) {
      width: 900px;
      height: 550px;
    }
    @media (max-width: 1100px) {
      width: 850px;
      height: 500px;
    }
    @media (max-width: 1000px) {
      width: 800px;
      height: 500px;
    }
    @media (max-width: 950px) {
      width: 700px;
      height: 420px;
    }
    @media (max-width: 900px) {
      width: 650px;
      height: 400px;
    }
    @media (max-width: 800px) {
      width: 600px;
      height: 370px;
    }
    @media (max-width: 768px) {
      width: 600px;
      height: 370px;
    }
    @media (max-width: 750px) {
      width: 580px;
      height: 350px;
    }
    @media (max-width: 750px) {
      width: 550px;
      height: 320px;
    }
    @media (max-width: 650px) {
      width: 500px;
      height: 290px;
    }
    @media (max-width: 600px) {
      width: 460px;
      height: 290px;
    }
    @media (max-width: 550px) {
      width: 410px;
      height: 290px;
    }
    @media (max-width: 500px) {
      width: 380px;
      height: 290px;
    }
    @media (max-width: 480px) {
      width: 360px;
      height: 290px;
    }
    @media (max-width: 450px) {
      width: 320px;
      height: 290px;
    }
    @media (max-width: 400px) {
      width: 300px;
      height: 290px;
    }
    @media (max-width: 370px) {
      width: 270px;
      height: 290px;
    }
  }
`;

export const CloseButton = styled.div`
  position: absolute;

  height: auto;
  p {
    //height: auto;
    color: #2c2315;
    font-size: 25px;
    margin: 5px 12px 0 0;
    font-weight: 600;
    cursor: pointer;

    @media (max-width: 1000px) {
      font-size: 20px;
    }
    @media (max-width: 900px) {
      font-size: 18px;
      margin: 3px 8px 0 0;
    }
    @media (max-width: 769px) {
      font-size: 18px;
      margin: 3px 8px 0 0;
    }
    @media (max-width: 480px) {
      font-size: 10px;
      margin: 3px 6px 0 0;
    }
  }
`;

export const DivShadowModal = styled.div`
  box-shadow: 12px 12px 20px 0px #00000086;
  img {
    height: 100%;
  }
`;

export const ImageModal = styled.div`
  //border: 2px solid blue;
  display: flex;
  justify-content: flex-end;
`;
