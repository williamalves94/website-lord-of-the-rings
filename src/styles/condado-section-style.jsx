import styled from 'styled-components';

export const Condado = styled.section`
    height: auto;
    background-color: black;
    border-top: 2px solid #F2CA53;
    padding: 60px 60px 40px 60px;
    p{
        color: #F2CA53;
        font-size: 80px;
        margin-top: 30px;
        justify-content: center;
        display: flex;
    }
`;

export const DivMain = styled.div`
    margin-top: 40px;
    display: flex;
    height: auto;
    background-color: #141414; //201f1f
    flex-wrap: wrap;
    border: 2px solid #F2CA53;
    border-radius: 4px;
`;

export const DivImg = styled.div`
    flex: 1; 
    img{
        width: 100%;        
        height: auto;
    }
`;

export const DivText = styled.div`
    width: auto;
    align-self: flex-start;
    padding: 10px;
    flex: 1;
    .title{
        justify-content: flex-start;
        color:#F2CA53;
        font-size: 60px;

    @media( max-width: 1713px ){
        font-size: 50px;
    }
       
    }

    p{
        color: #F2CA53; //F2CA53
        font-size: 40px;         
        padding: 0 30px 0 30px;
        font-family: 'Beau Rivage';
        letter-spacing: 1px;

    @media( max-width: 1713px  ){
        font-size: 36px;
    }
    @media( max-width: 1580px  ){
        font-size: 34px;
    }

    @media( max-width: 1580px  ){
        font-size: 32px;
    }

    @media( max-width: 1445px  ){
        font-size: 28px;
    }

    }

    
`;

export const DivCondadoImg = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const ImageIn = styled.div`
    display: flex;
    flex: 1 1 1;    
    padding: 10px;

    background-color: #141414;
    img{
        width: 100%;
        border: 2px solid #F2CA53;
        border-radius: 4px;
    }
`;