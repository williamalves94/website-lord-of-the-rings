import { MainImageEagle, TitleMordor } from '../styles-mordor/mordor-styles'
import ImageMainMordor from '../../assets/mordor/mordormain.png'

export const MordorEagleSection = () => {
    return (
        <MainImageEagle>
            <TitleMordor>
                <p className='title-mordor'>Mordor</p>
            </TitleMordor>
            <img src={ ImageMainMordor } />
        </MainImageEagle>
    )
}