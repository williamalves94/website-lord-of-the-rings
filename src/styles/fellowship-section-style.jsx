import styled from 'styled-components';

export const Fellowship = styled.section`
    height: auto;   
    justify-content: center;    
    background-color: black;
    padding: 60px 60px 40px 60px;

    @media( max-width: 480px  ){
        flex-direction: column;
        padding: 15px 15px 15px 15px;
    }
`;

export const DivMainFellowship = styled.div`    
    height: auto;
    background-color: #141414; //201f1f
    flex-wrap: wrap;
    display: flex;
    border: 2px solid #F2CA53;
    border-radius: 4px;

    @media( max-width: 480px  ){
        flex-direction: column;
    }
`;

export const ImageFellowship =styled.div`
    flex: 1;
    img{
        width: 100%;
        height: auto;
        border-radius: 4px;        
    }
`;

export const DivTextFellowship = styled.div`
    width: auto;
    flex: 1;
    margin-left: 30px;

    .title-fellowship{
        justify-content: flex-start;
        color:#F2CA53;
        font-size: 60px;
        
    @media( max-width: 1713px ){
        font-size: 50px;
    }

    @media( max-width: 1170px  ){
        font-size: 40px;
    }

    @media( max-width: 1100px  ){
        font-size: 36px;
    }
    }
    
    p{
        font-size: 35px;
        padding: 20px;
        color: #F2CA53;
        flex: 3;
        align-items: center;
        justify-content: center;
        display: flex;

    @media( max-width: 1880px  ){
        font-size: 32px;
        padding: 10px;
    }

    @media( max-width: 1715px  ){
        font-size: 32px;
        padding: 10px;
    }

    @media( max-width: 1600px  ){
        font-size: 30px;
        padding: 10px;
    }

    @media( max-width: 1512px  ){
        font-size: 28px;
        padding: 10px;
    }

    @media( max-width: 1470px  ){
        font-size: 26px;
        padding: 10px;
    }

    @media( max-width: 1340px  ){
        font-size: 22px;
        padding: 10px;
    }

    @media( max-width: 1275px  ){
        font-size: 20px;
        padding: 10px;
    }

    @media( max-width: 1140px  ){
        font-size: 20px;
        padding: 10px;
    }

    @media( max-width: 1124px  ){
        font-size: 19px;
        padding: 5px;
    }

    @media( max-width: 1100px  ){
        font-size: 18px; 
    }

    @media( max-width: 1048px  ){
        font-size: 17px; 
    }

    @media( max-width: 1048px  ){
        font-size: 16px; 
    }

    @media( max-width: 969px  ){
        font-size: 15px; 
    }

    @media( max-width: 891px  ){
        font-size: 15px;
    }

    @media( max-width: 880px  ){
        font-size: 13px;
        padding: 0px 15px 0px 0px;
    }
    @media( max-width: 805px  ){
        font-size: 12px;
    }

    @media( max-width: 480px  ){
        margin-bottom: 10px;
        font-size: 20px;
    }
    }
`;

export const DivFellowshipImg = styled.div`
    display: flex;
    margin-top: 20px;
    
    @media( max-width: 480px  ){
        flex-direction: column;
        grid-template-columns: repeat(2, 1fr);
    }
    
`;

export const ImgFellowship =styled.div`
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