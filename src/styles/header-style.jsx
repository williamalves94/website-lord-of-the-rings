import styled from 'styled-components';

export const Head = styled.header`
    width: 100%;
    height: 100px;
    border-bottom: 3px solid #F2CA53;
    //z-index: 100;
    background-color: black; //1f242d
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        margin-left: 60px;
        border: 2px solid black;
        font-size: 40px;
        color: white;        
    }
`;

export const NavHeader = styled.header`
    margin-right: 40px;
    a {
        color: #F2CA53;
        justify-content: space-around;
        margin-right: 50px;
        font-size: 40px;
        transition: all.3s;
        text-decoration: none;
    }
    a:hover {
        color: #F2D16B;
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
