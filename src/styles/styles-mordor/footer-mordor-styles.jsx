import styled from "styled-components";

export const FooterMordor = styled.footer`
  width: 100%;
  height: 165px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #f2ca53;
`;

export const LogoFooterMordor = styled.div`
  height: 150px;
  img {
    width: 400px;
    height: 150px;
    padding: 0px;
    @media (max-width: 1250px) {
      width: 330px;
      margin-left: 60px;
      align-items: center;
      display: flex;
    }

    @media (max-width: 1100px) {
      width: 310px;
      margin-left: 60px;
      align-items: center;
      display: flex;
    }

    @media (max-width: 950px) {
      width: 300px;
      margin-left: 50px;
      align-items: center;
      display: flex;
    }

    @media (max-width: 480px) {
      width: 250px;
      align-items: center;
      margin-left: 20px;
      display: flex;
    }
  }
`;
