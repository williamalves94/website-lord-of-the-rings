import { Balrog, BalrogImageMain, TitleBalrog } from '../styles-mordor/balrog-styles';
import BalrogMain from '../../assets/balrog/balrogmain.jpg';

export const BalrogSection = () => {
    return (
        <Balrog>
            <BalrogImageMain>
            <TitleBalrog>
                <p className='title-Balrog'>Balrog</p>
            </TitleBalrog>
                <img src={ BalrogMain } />
            </BalrogImageMain>
        </Balrog>
    );
}
 
