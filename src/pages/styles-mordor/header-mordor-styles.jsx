import styled from "styled-components";

export const HeaderMordor = styled.header`
    width: 100%;
    height: 100px;
    border-bottom: 2px solid #F2CA53;
    //z-index: 100;
    background-color: black; //1f242d
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        margin-left: 60px;
        font-size: 40px;        
    }
`;

export const LogoImg = styled.div`
    img{
        width: 380px;
        margin-left: 80px;
        align-items: center;
        display: flex;
    }
`;

export const NavHeader = styled.header`
    margin-right: 100px;
    display: flex;
    a {
        color: #F2CA53;
        justify-content: space-around;
        font-size: 44px;
        transition: all.3s;
        text-decoration: none;
    }

    .mapa {
        color: #F2CA53;
        justify-content: space-around;
        margin-right: 60px;
        font-size: 44px;
        transition: all.3s;
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        color: #D4AF37;
    }
`;