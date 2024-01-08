import styled from "styled-components";

export const HeaderMordor = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid #f2ca53;
  z-index: 999;
  position: fixed;
  background-color: black; //1f242d
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    height: 90px;
  }

  //@media (max-width: 1250px) {
  //width: 100%;
  //height: 100px;
  ///border-bottom: 2px solid #f2ca53;
  //z-index: 100;
  //background-color: black; //1f242d
  //color: white;
  //display: flex;
  //align-items: center;
  //}
`;

export const MenuIconMordor = styled.menu`
  font-size: 37px;
  //display: flex;
  margin-right: 20px;
  color: #f2ca53;
  display: none;
  cursor: pointer;
  :hover {
    color: #d4af37;
    transition: all.3s;
  }
  @media (max-width: 768px) {
    display: flex;
    font-size: 34px;
  }
`;

export const LogoImg = styled.div`
  img {
    width: 330px;
    margin-left: 60px;
    align-items: center;
    display: flex;
    cursor: pointer;

    @media (max-width: 1300px) {
      width: 310px;
      margin-left: 50px;
      align-items: center;
      display: flex;
    }

    @media (max-width: 1100px) {
      width: 300px;
      margin-left: 40px;
      align-items: center;
      display: flex;
    }

    @media (max-width: 1000px) {
      width: 260px;
      margin-left: 30px;
      align-items: center;
      display: flex;
    }
    @media (max-width: 900px) {
      width: 250px;
      margin-left: 30px;
      align-items: center;
      display: flex;
    }
    @media (max-width: 850px) {
      width: 230px;
      margin-left: 30px;
      align-items: center;
      display: flex;
    }
    @media (max-width: 768px) {
      width: 220px;
      align-items: center;
      margin-left: 20px;
      display: flex;
    }
    @media (max-width: 500px) {
      width: 200px;
      align-items: center;
      margin-left: 20px;
      display: flex;
    }
    @media (max-width: 480px) {
      width: 190px;
      align-items: center;
      margin-left: 15px;
      display: flex;
    }
  }
`;

export const NavHeader = styled.header`
  margin-right: 100px;
  display: flex;
  a {
    color: #f2ca53;
    font-size: 44px;
    transition: all.3s;
    text-decoration: none;

    @media (max-width: 1500px) {
      font-size: 42px;
    }

    @media (max-width: 1400px) {
      font-size: 40px;
    }
    @media (max-width: 1300px) {
      font-size: 37px;
    }
    @media (max-width: 1200px) {
      font-size: 34px;
    }

    @media (max-width: 1100px) {
      font-size: 33px;
    }
    @media (max-width: 1000px) {
      font-size: 31px;
    }
    @media (max-width: 900px) {
      font-size: 31px;
    }
    @media (max-width: 850px) {
      font-size: 30px;
    }
    @media (max-width: 785px) {
      font-size: 30px;
    }
  }

  .mapa {
    color: #f2ca53;
    justify-content: space-around;
    margin-right: 60px;
    margin-left: 60px;
    font-size: 44px;
    transition: all.3s;
    text-decoration: none;
    cursor: pointer;

    @media (max-width: 1500px) {
      font-size: 42px;
      margin-right: 40px;
      margin-left: 40px;
    }

    @media (max-width: 1400px) {
      font-size: 40px;
      margin-right: 40px;
      margin-left: 40px;
    }
    @media (max-width: 1300px) {
      justify-content: space-around;
      font-size: 37px;
      margin-right: 37px;
      margin-left: 37px;
    }
    @media (max-width: 1200px) {
      font-size: 35px;
    }
    @media (max-width: 1100px) {
      font-size: 33px;
      margin-right: 35px;
      margin-left: 35px;
    }
    @media (max-width: 1000px) {
      font-size: 31px;
      margin-right: 30px;
      margin-left: 30px;
    }
    @media (max-width: 900px) {
      font-size: 31px;
      margin-right: 25px;
      margin-left: 25px;
    }
    @media (max-width: 850px) {
      font-size: 30px;
    }
    @media (max-width: 785px) {
      font-size: 30px;
    }
  }

  a:hover {
    color: #d4af37;
  }

  p:hover {
    color: #d4af37;
  }

  @media (max-width: 1500px) {
    margin-right: 60px;
  }

  @media (max-width: 1300px) {
    margin-right: 60px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 1200px) {
    margin-right: 50px;
  }
  @media (max-width: 1100px) {
  }
  @media (max-width: 1100px) {
  }
  @media (max-width: 1100px) {
  }

  @media (max-width: 1000px) {
    margin-right: 40px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
