import './Game.css'
import Directions from './Directions'
import InfoDisplay from './InfoDisplay'
import Background from './Background'

const Game = () => {
    return (
        <section
            className='d-flex justify-content-center flex-wrap flex-column gap-3'
        >  
            <InfoDisplay />
            <Background />
            <Directions />
        </section>
    )
}

export default Game