import styled from "styled-components";

export const FooterMordor = styled.footer`
  width: 100%;
  height: 165px;
  background-color: #111111;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 3px solid #f2ca53;
`;

export const LogoFooterMordor = styled.div`
  height: 150px;
  img {
    width: 400px;
    height: 150px;
    padding: 0px;
    width: 380px;
    //margin-left: 80px;
    align-items: center;
    display: flex;
    cursor: pointer;

    @media (max-width: 1250px) {
      width: 330px;
      //margin-left: 60px;
      align-items: center;
      display: flex;
    }

    @media (max-width: 1100px) {
      width: 310px;
      //margin-left: 60px;
      align-items: center;
      display: flex;
    }

    @media (max-width: 950px) {
      width: 300px;
      //margin-left: 50px;
      align-items: center;
      display: flex;
    }

    @media (max-width: 480px) {
      width: 250px;
      height: 100px;
      justify-content: center;
      align-items: center;
      margin-top: 25px;
      display: flex;
    }
  }
`;
