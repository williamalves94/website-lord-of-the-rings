import styled from 'styled-components';

export const Head = styled.header`
    width: 100%;
    height: 100px;
    border-bottom: 2px solid #F2CA53;
    //z-index: 100;
    background-color: black; //1f242d
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media( max-width: 1250px ){
        width: 100%;
        height: 100px;
        border-bottom: 2px solid #F2CA53;
        //z-index: 100;
        background-color: black; //1f242d
        color: white;
        display: flex;
        align-items: center;  
    }

    
`;

export const NavHeader = styled.header`
    margin-right: 100px;
    display: flex;
    a {
        color: #F2CA53;
        font-size: 44px;
        transition: all.3s;
        text-decoration: none;

    @media( max-width: 1250px ){
        font-size: 38px;
    }

    @media( max-width: 1100px ){
        font-size: 35px;
    }

    @media( max-width: 950px ){
        font-size: 33px;
    }

    }

    .mapa {
        color: #F2CA53;
        justify-content: space-around;
        margin-right: 60px;
        margin-left: 60px;
        font-size: 44px;
        transition: all.3s;
        text-decoration: none;
        cursor: pointer;

    @media( max-width: 1250px ){
        justify-content: space-around;
        font-size: 38px;
        margin-right: 40px;
        margin-left: 40px;
    }
    
    @media( max-width: 1100px ){
        font-size: 35px;
        margin-right: 40px;
        margin-left: 40px;
    }

    @media( max-width: 950px ){
        font-size: 33px;
        margin-right: 30px;
        margin-left: 30px;
    }

    }
    
    a:hover {
        color: #D4AF37;
    }

    p:hover {
        color: #D4AF37;
    }

    @media( max-width: 1250px ){
        margin-right: 60px;
        font-size: 44px;
        display: flex;
        align-items: center;        
    }

    @media( max-width: 950px ){
        margin-right: 50px;     
    }
`;

export const LogoImg = styled.div`
    img{
        width: 380px;
        margin-left: 80px;
        align-items: center;
        display: flex;

    @media( max-width: 1250px ){
        width: 330px;
        margin-left: 60px;
        align-items: center;
        display: flex;
    }

    @media( max-width: 1100px ){
        width: 310px;
        margin-left: 60px;
        align-items: center;
        display: flex;
    }

    @media( max-width: 950px ){
        width: 300px;
        margin-left: 50px;
        align-items: center;
        display: flex;
    }

    }
`;
