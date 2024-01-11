import styled from "styled-components";

export const DivSidebar = styled.div`
  background-color: #111111;
  border-bottom: 2px solid #f2ca53;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  height: 8%;
  top: 100px;
  width: 100%;
  @media (max-width: 768px) {
    top: 80px;
  }

  left: ${(props) => (props.sidebar ? "0" : "100%")};

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const DivTags = styled.div`
  display: flex;
  a {
    color: #f2ca53;
    font-size: 34px;
    cursor: pointer;
    margin: 0 20px 0 20px;
    text-decoration: none;
    :hover {
      color: #d4af37;
      transition: all.3s;
    }
    @media (max-width: 768px) {
      font-size: 34px;
    }
    @media (max-width: 574px) {
      font-size: 32px;
      margin: 0 10px 0 10px;
    }
    @media (max-width: 490px) {
      font-size: 30px;
      //margin: 0 10px 0 10px;
    }
    @media (max-width: 480px) {
      font-size: 30px;
      //margin: 0 10px 0 10px;
    }
    @media (max-width: 459px) {
      font-size: 30px;
      //margin: 0 15px 0 15px;
    }
    @media (max-width: 442px) {
      font-size: 30px;
      //margin: 0 16px 0 16px;
    }
    @media (max-width: 400px) {
      font-size: 30px;
      //margin: 0 15px 0 15px;
    }
    @media (max-width: 436px) {
      font-size: 30px;
      // margin: 0 15px 0 15px;
    }
    @media (max-width: 410px) {
      font-size: 3px;
    }
    @media (max-width: 403px) {
      font-size: 30px;
    }
    @media (max-width: 393px) {
      font-size: 30px;
    }
    @media (max-width: 379px) {
      font-size: 28px;
    }
    @media (max-width: 361px) {
      font-size: 25px;
    }
    @media (max-width: 335px) {
      font-size: 23px;
    }
    @media (max-width: 320px) {
      font-size: 23px;
    }
  }
  .mapa-sidebar {
    color: #f2ca53;
    font-size: 34px;
    cursor: pointer;
    text-decoration: none;
    :hover {
      color: #d4af37;
      transition: all.3s;
    }
    @media (max-width: 768px) {
      font-size: 34px;
      margin: 0 30px 0 30px;
    }

    @media (max-width: 574px) {
      font-size: 32px;
      margin: 0 10px 0 10px;
    }
    @media (max-width: 490px) {
      font-size: 30px;
      margin: 0 10px 0 10px;
    }
    @media (max-width: 480px) {
      font-size: 30px;
      margin: 0 10px 0 10px;
    }
    @media (max-width: 459px) {
      font-size: 30px;
      margin: 0 10px 0 10px;
    }
    @media (max-width: 442px) {
      font-size: 30px;
    }
    @media (max-width: 435px) {
      font-size: 28px;
    }
    @media (max-width: 400px) {
      font-size: 30px;
    }

    @media (max-width: 436px) {
      font-size: 30px;
    }
    @media (max-width: 419px) {
      font-size: 30px;
    }
    @media (max-width: 410px) {
      font-size: 30px;
    }
    @media (max-width: 403px) {
      font-size: 30px;
    }
    @media (max-width: 393px) {
      font-size: 30px;
    }
    @media (max-width: 379px) {
      font-size: 28px;
    }
    @media (max-width: 361px) {
      font-size: 25px;
    }
    @media (max-width: 335px) {
      font-size: 23px;
    }
    @media (max-width: 320px) {
      font-size: 23px;
    }
  }
`;
