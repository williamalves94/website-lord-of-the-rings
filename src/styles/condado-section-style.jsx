import styled from 'styled-components';

export const Condado = styled.section`
    height: auto;
    background-color: black;   
    border-top: 3px solid #F2CA53;
    padding: 60px 60px 40px 60px;
    p{
        color: #F2CA53;
        font-size: 70px;
        margin-top: 30px;
        justify-content: center;
        display: flex;
    }
`;

export const DivMain = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    background-color: black;
    flex-wrap: wrap;
    border: 3px solid #F2CA53;
`;

export const DivImg = styled.div`
    flex: 2 1; 
    img{
        width: 100%;        
        height: auto;
    }
`;

export const DivText = styled.div`
    border: 3px solid #ff00ea;
    justify-content: center;
    flex-direction: column;
    p{
        color: #fff;
        font-size: 60px;
    }
`;

export const DivCondadoImg = styled.div`
    display: flex;
    margin-top: 20px;
    
`;

export const ImageIn = styled.div`
    display: flex;
    flex: 1 1 1;
    border: 3px solid #F2CA53;
    img{
        width: 100%;
    }
`;